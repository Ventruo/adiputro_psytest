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
let regexopt = new RegExp(
  `((ap\.ngrok\.io)|(127\.0\.0\.1)|(${process.env.CLIENT_URL}))`
);


let host = "localhost";
if (process.env.NODE_ENV != "dev") {
  host = process.env.EXPRESS_URL;
}

app.use(
  cors({
    origin: `${host}:${PORT}`,
    credentials: true,
  })
);

const initExpress = () => {
  app.listen(PORT, host, () => {
    console.log(`Server started on ${host}:${PORT}`);
  });
};

module.exports = { app, initExpress };
