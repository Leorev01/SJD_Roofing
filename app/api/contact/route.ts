import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const responseHeaders = new Headers();
  responseHeaders.append('Access-Control-Allow-Origin', '*');
  responseHeaders.append('Access-Control-Allow-Methods', 'POST');
  responseHeaders.append('Access-Control-Allow-Headers', 'Content-Type');

  try {
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers: responseHeaders });
    }

    // Parse the incoming request JSON data
    const { name, email, phone, message } = await req.json();

    // Log received data for debugging
    console.log('Received data:', { name, email, phone, message });

    if (!name || !email || !message || !phone) {
      console.error('Missing required fields:', { name, email, phone, message });
      return new NextResponse(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: responseHeaders }
      );
    }

    // Set up the email transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // or your SMTP server
      port: 587, // or 465 for secure
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: 'revrennaleo@gmail.com',
      subject: `New contact message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Log mail options for debugging
    console.log('Sending email with options:', mailOptions);

    // Send the email
    await transporter.sendMail(mailOptions);

    return new NextResponse(
      JSON.stringify({ message: 'Your message has been sent!' }),
      { status: 200, headers: responseHeaders }
    );
  } catch (error) {
    console.error('Error in API handler:', error);

    return new NextResponse(
      JSON.stringify({ error: 'There was an error sending your message' }),
      { status: 500, headers: responseHeaders }
    );
  }
}
