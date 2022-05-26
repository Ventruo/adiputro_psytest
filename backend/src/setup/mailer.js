const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createMailer = async () => {
  const oauth2Client = new OAuth2(
    process.env.MAILER_CLIENT_ID,
    process.env.MAILER_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.MAILER_REFRESH_TOKEN,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        console.log(err);
        reject("Failed to create access token :(");
      }
      resolve(token);
    });
  });

  const mailer = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MAILER_USER,
      accessToken,
      clientId: process.env.MAILER_CLIENT_ID,
      clientSecret: process.env.MAILER_CLIENT_SECRET,
      refreshToken: process.env.MAILER_REFRESH_TOKEN,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return mailer;

  // MAILTRAP
  // let mailer = nodemailer.createTransport({
  //   host: process.env.MAILER_HOST,
  //   port: process.env.MAILER_PORT,
  //   auth: {
  //     user: process.env.MAILER_AUTH_USER,
  //     pass: process.env.MAILER_AUTH_PASS,
  //   },
  // });
};

module.exports = { createMailer };
