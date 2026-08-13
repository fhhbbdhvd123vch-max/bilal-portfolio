import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  success: boolean;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: 'Please fill in all fields',
        success: false,
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Please provide a valid email address',
        success: false,
      });
    }

    // Here you would typically send the email using nodemailer or another service
    // For now, we'll just return a success response
    console.log('Form submission:', { name, email, subject, message });

    return res.status(200).json({
      message: 'Message sent successfully! I will get back to you soon.',
      success: true,
    });
  }

  return res.status(405).json({
    message: 'Method not allowed',
    success: false,
  });
}
