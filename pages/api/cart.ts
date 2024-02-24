import type { NextApiRequest, NextApiResponse } from 'next';
import carts from './data/carts.json';
import { getSession } from 'next-auth/react';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req });
	const currentUserEmail = session?.user.email;

	if (req.method === 'GET') {
		if (currentUserEmail) {
			const currentUserCart = carts[currentUserEmail];
			res.status(200).json(currentUserCart);
		}
	}

	if (req.method === 'PATCH') {
		const { id, totalCount } = req.body;
		if (currentUserEmail) {
			carts[currentUserEmail][id].totalCount == totalCount;
			res.status(200).json({});
		}
	}

	res.status(200).json({});
}
