const nodeMailer = require("nodemailer");
exports.sendEmail = (mailingData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.ECOM_EMAIL,
      pass: process.env.ECOM_PASSWORD,
    },
  });
  return transporter
    .sendMail(mailingData)
    .then((info) => {
      console.log(`Message sent: ${info.response}`);
    })
    .catch((err) => {
      console.log(`Problem sending email: ${err}`);
      err.message = "There was a problem while sending a email";
      throw err;
    });
};
