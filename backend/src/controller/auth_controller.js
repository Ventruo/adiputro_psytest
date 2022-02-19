const jwt = require("jsonwebtoken");
const ExamSession = require("../models/ExamSession");
const short = require("short-uuid");
const {
  missing_param_response,
  data_not_found_response,
} = require("../helpers/ResponseHelper");

class AuhtController {
  login(req, res) {
    console.log("Login Attempt");

    if (!req.body.email || !req.body.test_token) {
      missing_param_response(res);
      return;
    }

    ExamSession.findOne({ where: { email: req.body.email } }).then(
      (session) => {
        if (!session) {
          data_not_found_response(res);
          return;
        }

        if (session.test_token != req.body.test_token)
          return res.status(401).send("Invalid Test Token");

        const refresh_token = jwt.sign(session.id, process.env.REFRESH_KEY);

        const user_key = short.generate();
        const access_token = jwt.sign(
          { session_id: session.id },
          process.env.ACCESS_KEY + user_key,
          {
            expiresIn: "1h",
          }
        );

        session.set({
          auth_token: user_key,
        });
        session.save();

        res.json({ access_token: access_token, refresh_token: refresh_token });
      }
    );
  }

  refresh(req, res) {
    console.log("Refreshing Access Token");

    const refresh_token = req.body.refresh_token;
    if (refresh_token == null) return res.sendStatus(401);

    const session_id = jwt.decode(refresh_token);
    ExamSession.findOne({ where: { id: session_id } }).then((session) => {
      if (!session) {
        data_not_found_response(res);
        return;
      }

      const access_token = jwt.sign(
        { session_id: session_id },
        process.env.ACCESS_KEY + session.auth_token,
        {
          expiresIn: "1h",
        }
      );

      res.json({ access_token: access_token });
    });
  }

  verifyToken(req, res, next) {
    console.log("Verifying Token");

    const authHeader = req.headers["authorization"];
    const access_token = authHeader && authHeader.split(" ")[1];
    const refresh_token = authHeader && authHeader.split(" ")[2];
    if (access_token == null || refresh_token == null)
      return res.sendStatus(401);

    const session_id = jwt.decode(refresh_token);
    ExamSession.findOne({ where: { id: session_id } }).then((session) => {
      if (!session) {
        data_not_found_response(res);
        return;
      }

      jwt.verify(
        access_token,
        process.env.ACCESS_KEY + session.auth_token,
        (err, decoded) => {
          if (err) {
            console.log(err);
            return res.sendStatus(401);
          }

          next();
        }
      );
    });
  }
}

module.exports = AuhtController;
