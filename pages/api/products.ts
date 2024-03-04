import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from './data/products.js';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { _category, _search } = req.query;

	if (req.method === 'GET') {
		let currentProducts = products;

		const filterByCategory =
			_category === 'All'
				? products
				: products.filter(
						(product) =>
							product.category.toLowerCase() === _category.toLowerCase()
				  );

		const filterBySearch = filterByCategory.filter((product) =>
			product.title.toLowerCase().includes(_search.toLowerCase())
		);
		currentProducts = filterBySearch;
		res.status(200).json(currentProducts);
	}
}
