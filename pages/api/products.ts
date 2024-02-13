import type { NextApiRequest, NextApiResponse } from 'next';
import data from './data/products.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { _category } = req.query;

	if (req.method === 'GET') {
		let currentProducts = data.products;

		if ( _category && _category !== 'All') {
			currentProducts = data.products.filter(
				(product) => product.category.toLowerCase() === _category.toLowerCase()
			);
		}
		res.status(200).json(currentProducts);
	}
}
