const Registrant = require("../models/Registrant");

class RegistrantController {
  async index(req, res) {
    console.log("Registrant Index");
    Registrant.findOne({ where: { email: "a@a.com" } }).then((registrant) => {
      console.log(registrant);
      res.send("Index");
    });
  }

  create(req, res) {
    console.log("Create Registrant");
    res.send("Create Registrant");
  }
}

module.exports = RegistrantController;
