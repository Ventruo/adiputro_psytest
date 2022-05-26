const jwt = require("jsonwebtoken");
const ExamSession = require("../models/ExamSession");
const access_key = process.env.ACCESS_KEY || "ini access key";
const clock_key = process.env.CLOCK_TOKEN || "ini clock key";

function authenticateSocketToken(socket, next) {
  if (
    socket.handshake.query &&
    socket.handshake.query.token &&
    socket.handshake.query.user_key
  ) {
    const { session_id } = jwt.decode(socket.handshake.query.user_key);
    // console.log(session_id);
    ExamSession.findOne({ where: { id: session_id } }).then((session) => {
      // console.log(session);
      jwt.verify(
        socket.handshake.query.token, //access
        access_key + session.auth_token, //token + user id
        function (err, decoded) {
          if (err) {
            socket.auth = false;
            console.log(err.message);
            return next(new Error("Authentication error"));
          }
          socket.decoded = decoded;
          socket.auth = true;
          socket.emit("authenticated", {});
          next();
        }
      );
    });
  } else {
    socket.auth = false;
    socket.emit("unauthorized", {});
  }
}

function interServerAuthentication(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    if (token == null) return res.status(401).send("FAIL");

    jwt.verify(token, clock_key, (err, user) => {
      if (err) {
        res.status(403).send("FORBIDDEN");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    res.status(401).send("FAIL");
  }
}

module.exports = {
  authenticateSocketToken,
  interServerAuthentication,
};
