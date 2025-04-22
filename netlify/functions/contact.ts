import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.CLIENT_ID,
    pass: process.env.CLIENT_SECRET,
  },
});

const sendEmail = (messageBody: EmailParams, to?: string): Promise<string> => {
  const mailOptions = {
    from: messageBody.email,
    to,
    subject: messageBody.subject,
    text: messageBody.message,
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve('Completed');
      }
    });
  });
};

exports.handler = async (event: { body: string }) => {
  try {
    const { name, email, subject, message }: EmailParams = JSON.parse(event.body);
    const info = await sendEmail(
      {
        name, 
        email, 
        subject: `Message from ${name} - ${subject}`, 
        message:`From: ${name} (${email})\n\nMessage:\n\n${message}`
      },
      process.env.CLIENT_ID,
    );

    return {
      statusCode: 200,
      body: info,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error,
    };
  }
};
