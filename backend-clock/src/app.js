// Init dot env process file
const dotenv = require("dotenv");
dotenv.config();

const { initService } = require("./services/service");

// init all application
console.log("=== THIS IS THE MAIN CLOCK INTANCE ===");
initService();
