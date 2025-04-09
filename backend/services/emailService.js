const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * Sends a support email
 * @param {string} name - Sender's name
 * @param {string} email - Sender's email address
 * @param {string} message - Support message
 * @returns {Promise} - Promise resolving to mail send result
 */
const sendSupportEmail = async (name, email, message) => {
  const mailOptions = {
    from: `${name} <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Support Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>Support Request</h3>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  return transporter.sendMail(mailOptions);
};

module.exports = {
  sendSupportEmail
};