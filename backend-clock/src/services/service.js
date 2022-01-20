import fetch from "node-fetch";

// clock
import Clock from "./Clock.js";

async function initService() {
  const clock = new Clock(update, 500);
  clock.start();
}

async function update() {
  fetch(
    process.env.EXPRESS_URL + "/clock/update?token=" + process.env.CLOCK_TOKEN
  ).then((response) => console.log("Clock Ticking"));
  // .then((response) => console.log("Clock Update Response\n", response))
  // .then((data) => console.log("data\n", data))
  // .catch((error) => console.log("ERROR TICK", error));
}

export default initService;
