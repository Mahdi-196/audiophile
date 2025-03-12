import nodemailer from 'nodemailer';

const sendPasswordResetLink = async (email) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset',
      text: 'Click the link below to reset your password:\n\n' +
            `http://localhost:3000/reset-password?email=${encodeURIComponent(email)}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Password reset link sent to:', email);
  } catch (error) {
    console.error('Error sending password reset link:', error);
  }
};

export default sendPasswordResetLink;
