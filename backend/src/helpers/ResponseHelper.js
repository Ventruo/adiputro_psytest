module.exports = {
  missing_param_response(res) {
    console.log("Missing Required Parameters");
    res.status(422);
    res.send("Missing Required Parameters");
  },

  success_response(res, data, msg) {
    console.log(msg);
    res.status(200);
    res.send(data);
  },
};
