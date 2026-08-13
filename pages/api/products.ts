import { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  downloads: number;
};

type ResponseData = {
  success: boolean;
  data?: Product[];
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const products: Product[] = [
      { id: 1, name: 'E-Commerce Platform', price: 79, category: 'full-stack', rating: 4.9, downloads: 2500 },
      { id: 2, name: 'SaaS Dashboard', price: 59, category: 'template', rating: 4.8, downloads: 1800 },
      { id: 3, name: 'Blog Engine', price: 39, category: 'template', rating: 4.9, downloads: 3200 },
      { id: 4, name: 'Chat Application', price: 99, category: 'full-stack', rating: 4.7, downloads: 1200 },
      { id: 5, name: 'Component Library', price: 49, category: 'component', rating: 4.8, downloads: 2100 },
      { id: 6, name: 'Payment System', price: 69, category: 'component', rating: 4.9, downloads: 1500 },
    ];

    return res.status(200).json({ success: true, data: products });
  }

  return res.status(405).json({ success: false, message: 'Method not allowed' });
}
