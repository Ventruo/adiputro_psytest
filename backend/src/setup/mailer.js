const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const createMailer = async () => {
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    process.env.OAUTH_SCOPE_CALLBACK
  );

  // // generate a url that asks permissions for Gmail scopes
  // const url = oauth2Client.generateAuthUrl({
  //   access_type: "offline",
  //   scope: [
  //     "https://www.googleapis.com/auth/drive",
  //     "https://mail.google.com/",
  //   ],
  // });
  // console.log(url);
  // // Run this after you get code from callback url
  // const { tokens } = await oauth2Client.getToken(
  //   "4/0AX4XfWjYMXbRY5EQv-lacPpSyuO3nKbjSkZI5ZnWJe7wjfBFbxCJMW7Hm-ucHW5ZCpyIEA"
  // );
  // console.log(tokens);
  // //Save the refresh token

  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });
  oauth2Client.on("tokens", (tokens) => {
    if (tokens.refresh_token) {
      // store the refresh_token in my database!
      console.log(tokens.refresh_token);
    }
    console.log(tokens.access_token);
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
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
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
