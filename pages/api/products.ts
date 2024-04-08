import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from './data/products.js';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { category = 'All', search = '' } = req.query;

	if (req.method === 'GET') {
		let currentProducts = products;

		const filterByCategory =
			category === 'All'
				? products
				: products.filter(
						(product) =>
							product.category.toLowerCase() === (category as string).toLowerCase()
				  );

		const filterBySearch = filterByCategory.filter((product) =>
			product.title.toLowerCase().includes((search as string).toLowerCase())
		);
		currentProducts = filterBySearch;
		res.status(200).json(currentProducts);
	}
}
