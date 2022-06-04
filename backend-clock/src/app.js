// Init dot env process file
import dotenv from "dotenv";
dotenv.config();

import initService from "./services/service.js";

// init all application
console.log("=== THIS IS THE MAIN CLOCK INSTANCE ===");
initService();
