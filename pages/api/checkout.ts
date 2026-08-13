import { NextApiRequest, NextApiResponse } from 'next';

type RequestBody = {
  items: Array<{ id: number; quantity: number }>;
  email: string;
};

type ResponseData = {
  success: boolean;
  sessionId?: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    const { items, email } = req.body as RequestBody;

    // Validate input
    if (!items || !email) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // Here you would integrate with Stripe
    // For now, we'll return a mock session ID
    const sessionId = `cs_test_${Math.random().toString(36).substring(7)}`;

    return res.status(200).json({
      success: true,
      sessionId,
      message: 'Checkout session created successfully',
    });
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
