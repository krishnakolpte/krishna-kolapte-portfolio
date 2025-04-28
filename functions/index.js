const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'work.krishnakolapte@gmail.com', // Firebase environment variable for email
    pass: 'imbsxwfvrhfakzov', // Firebase environment variable for password
  },
});

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method === 'OPTIONS') {
      // Handle preflight OPTIONS request
      res.set('Access-Control-Allow-Origin', '*');
      res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
      res.set('Access-Control-Allow-Headers', 'Content-Type');
      return res.status(204).send(''); // No Content
    }

    if (req.method !== 'POST') {
      return res
        .status(405)
        .send({ success: false, message: 'Only POST requests allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .send({ success: false, message: 'Please fill all fields' });
    }

    // Define the HTML email template with dynamic content
    const emailTemplate = `
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New Contact Message</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(120deg, #f0f4f8, #d9e4f5);
      font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
      color: #333;
    }

    .container {
      max-width: 600px;
      margin: 50px auto;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      animation: fadeIn 0.8s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .header {
      background: url('https://res.cloudinary.com/dl1hhfbhd/image/upload/v1745856348/Screenshot_2025-04-28_213442_wgmfxh.png') no-repeat center/cover;
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 28px;
      font-weight: bold;
      letter-spacing: 1px;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
    }

    .content {
      padding: 30px;
    }

    .content h2 {
      font-size: 24px;
      margin-bottom: 10px;
      color: #2c3e50;
    }

    .info {
      margin-top: 20px;
      background-color: #f9fafc;
      border-radius: 12px;
      padding: 20px;
    }

    .info p {
      margin: 10px 0;
      font-size: 16px;
      color: #555;
    }

    .info p strong {
      color: #2c3e50;
    }

    .button {
      display: inline-block;
      margin-top: 30px;
      padding: 14px 28px;
      background: linear-gradient(90deg, #007bff, #00c6ff);
      color: white;
      font-weight: bold;
      font-size: 16px;
      border-radius: 50px;
      text-decoration: none;
      transition: background 0.4s ease;
    }

    .button:hover {
      background: linear-gradient(90deg, #0056b3, #0096c7);
    }

    .footer {
      text-align: center;
      padding: 20px;
      font-size: 14px;
      color: #999;
    }

    .footer a {
      margin-block: 10;
      color: #007bff;
      text-decoration: none;
      font-weight: bold;
    }

    .footer a:hover {
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      .content {
        padding: 20px;
      }
      .header {
        height: 140px;
        font-size: 24px;
      }
      .button {
        font-size: 14px;
        padding: 12px 24px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      
    </div>
    <div class="content">
      <h2>Hey 👋 Krishna, you have a new message!</h2>
      <p>${name} just contacted you through your website:</p>

      <div class="info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${email}" class="button">Reply Now</a>
      </div>
    </div>
    <div class="footer">
      Thanks for connecting! 🚀<br>
      <a href="https://your-portfolio.com" target="_blank">Visit My Portfolio</a>
    </div>
  </div>
</body>
</html>
`;

    const mailOptions = {
      from: email,
      to: 'work.krishnakolapte@gmail.com',
      subject: `Portfolio -- ${name} want to connect you!`,
      html: emailTemplate,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.set('Access-Control-Allow-Origin', '*'); // Important!
      return res
        .status(200)
        .send({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.set('Access-Control-Allow-Origin', '*'); // Important!
      return res.status(500).send({
        success: false,
        message: 'Error sending email: ' + error.message,
      });
    }
  });
});
