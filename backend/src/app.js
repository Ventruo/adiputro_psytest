// load .env file
const dotenv = require("dotenv");
dotenv.config();

const { initExpress } = require("./setup/express");
const { initDB } = require("./setup/sequelize");
const { initSocket } = require("./setup/socketio");

// Load Files
initDB().then(() => {
  initExpress();
  require("./routers/express_router");
  initSocket();
  require("./routers/socket_router");
});
