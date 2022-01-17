const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.EXPRESS_PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// let url;
// if (process.env.CLIENT_PORT) {
//   url = process.env.CLIENT_URL || "http://127.0.0.1:5050";
// } else {
//   url = process.env.EXPRESS_URL || "http://127.0.0.1:3000";
// }

// app.use(
//   cors({
//     origin: [url, "http://localhost:5050"],
//     credentials: true,
//   })
// );

const initExpress = () => {
  app.listen(PORT, () => {
    console.log(`Server started on ${process.env.EXPRESS_URL}`);
  });
};

module.exports = { app, initExpress };
