import type { NextApiRequest, NextApiResponse } from 'next';

type CheckoutResponse = { success: boolean; message: string; sessionId?: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<CheckoutResponse>) {
  if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method not allowed' });
  const { items, email } = req.body as { items?: number[]; email?: string };
  if (!Array.isArray(items) || items.length === 0 || !email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Please add items and a valid email address.' });
  }
  // Replace this demo response with Stripe Checkout in production.
  return res.status(200).json({ success: true, sessionId: `demo_${Date.now()}`, message: 'Checkout request received. Connect Stripe to collect payment.' });
}
