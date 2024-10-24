const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Example of handling form submissions
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `New Message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email', error });
  }
});

module.exports = router;
