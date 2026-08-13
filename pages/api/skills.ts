import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  data?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const skills = [
      {
        category: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      },
      {
        category: 'Backend',
        items: ['Node.js', 'Express', 'Python', 'RESTful APIs', 'GraphQL'],
      },
      {
        category: 'Databases',
        items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis', 'MySQL'],
      },
      {
        category: 'Tools',
        items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Webpack'],
      },
    ];

    return res.status(200).json({
      message: 'Skills retrieved successfully',
      data: skills,
    });
  }

  return res.status(405).json({
    message: 'Method not allowed',
  });
}
