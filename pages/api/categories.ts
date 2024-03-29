import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data/products.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(data.categories);
	}
}
