import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from './data/products.js';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { _category } = req.query;

	if (req.method === 'GET') {
		let currentProducts = products;

		if (_category && _category !== 'All') {
			currentProducts = products.filter(
				(product) => product.category.toLowerCase() === _category.toLowerCase()
			);
		}
		res.status(200).json(currentProducts);
	}
}
