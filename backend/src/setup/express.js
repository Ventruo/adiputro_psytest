const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = process.env.EXPRESS_PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// let url;
// if (process.env.CLIENT_PORT) {
//   url = process.env.CLIENT_URL || "http://127.0.0.1:5050";
// } else {
//   url = process.env.EXPRESS_URL || "http://127.0.0.1:3000";
// }

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
    credentials: true,
  })
);

let host = "localhost";
if (process.env.NODE_ENV != "dev") {
  host = "0.0.0.0";
}

const initExpress = () => {
  app.listen(PORT, host, () => {
    console.log(`Server started on ${process.env.EXPRESS_URL}`);
  });
};

module.exports = { app, initExpress };
