const { mailer } = require("../setup/mailer");

async function sendEmail({ recepients, subject, text = "", html = "" } = {}) {
  console.log(recepients);
  let config = {
    from: process.env.MAILER_SENDER, // sender address
    subject: subject, // Subject line
  };

  // Set Recepients
  let r = "";
  if (recepients.length == 1) {
    r = recepients[0];
    config.to = r; //receivers
  } else if (!Array.isArray(recepients)) {
    r = recepients;
    config.to = r; //receivers
  } else {
    for (let i = 0; i < recepients.length; i++) {
      r += recepients[i] + ",";
    }
    r = r.substring(0, r.length - 1);
    config.bcc = r; // list of receivers
  }

  // Set other variables
  if (text != "") config.text = text;
  if (html != "") config.html = html;

  // Send Email
  let info = await mailer.sendMail(config);

  console.log("Message sent: %s", info.messageId);
}

module.exports = { sendEmail };
