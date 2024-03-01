import type { NextApiRequest, NextApiResponse } from 'next';
import {categories} from './data/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		res.status(200).json(categories);
	}
}
