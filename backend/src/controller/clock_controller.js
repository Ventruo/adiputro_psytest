class ClockController {
  start(req, res) {
    console.log("Starting Clock");
  }

  stop(req, res) {
    console.log("Stopping Clock");
    res.send("Clock is Stopping");
  }

  update(req, res) {
    console.log("Backend Clock is Updating");
    res.send("Clock is Updating");
  }
}

module.exports = ClockController;
