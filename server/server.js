const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Contact API
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can replace 'gmail' with another email provider if needed
      auth: {
        user: 'sanjaysubash038@gmail.com', // Replace with your email
        pass: 'your-email-password', // Replace with your app-specific password or OAuth credentials
      },
    });

    // Email details
    const mailOptions = {
      from: email, // The email of the sender
      to: 'your-email@gmail.com', // Your email to receive messages
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong. Try again later.' });
  }
});

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
