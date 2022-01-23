const Test = require("../models/Test");

class TestController {
  async index(req, res) {
    console.log("Getting Test Index...");

    Test.findOne({ where: { id: 1 } }).then((test) => {
      res.send(test);
      console.log("Get All Data Successful!");
    });
  }

  async getAll(req, res) {
    console.log("Getting all Available Tests...");

    Test.findAll({ where: { status: 1 } }).then((tests) => {
      res.status(200);
      res.send(tests);
      console.log("Get All Data Successful!");
    });
  }

  async create(req, res) {
    console.log("Creating A New Test...");

    if (!req.body.name || !req.body.type) {
      res.status(422);
      res.send("Missing Required Parameters");
      console.log("Missing Required Parameters");
      return;
    }

    const new_test = await Test.create({
      name: req.body.name,
      type: req.body.type,
    });

    res.status(200);
    res.send(new_test.toJSON());
    console.log("Create Successful!");
  }

  async update(req, res) {
    console.log("Updating A Test...");

    if (!req.body.updating_id || !req.body.name || !req.body.type) {
      res.status(422);
      res.send("Missing Required Parameters");
      console.log("Missing Required Parameters");
      return;
    }

    Test.findOne({ where: { id: req.body.updating_id } }).then((test) => {
      test.set({
        name: req.body.name,
        type: req.body.type,
      });
      test.save();

      res.status(200);
      res.send(test.toJSON());
      console.log("Update successful!");
    });
  }
}

module.exports = TestController;
