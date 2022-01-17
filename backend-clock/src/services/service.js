// init env file
const dotenv = require("dotenv");
dotenv.config();

// timer
const Timer = require("./Timer");

async function initService() {
  const timer = new Timer(update, 500);
  timer.start();
}

async function update() {
  console.log("hello");
}

module.exports = { initService };
