import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // or your SMTP server
      port: 587, // or 465 for secure
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Test connection (this won't send an actual email)
    await transporter.verify();

    res.status(200).json({ message: 'SMTP connection successful' });
  } catch (error) {
    console.error('SMTP test error:', error);
    res.status(500).json({ error: (error as Error).message });
  }
}
