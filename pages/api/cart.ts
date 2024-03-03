import type { NextApiRequest, NextApiResponse } from 'next';
import { carts } from './data/carts';
import { getToken } from 'next-auth/jwt';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const token = await getToken({ req });
	const currentUserEmail = token?.email;
	const currentUserCart = carts.find((item) => item.email === currentUserEmail);

	if (req.method === 'GET') {
		if (currentUserEmail) {
			res.status(200).json(currentUserCart?.cart);
		}
	}

	if (req.method === 'PATCH') {
		if (currentUserEmail) {
			const { id, totalCount } = req.body;
			const userCartItemByID = currentUserCart?.cart.find(
				(item) => item.id === id
			);
			carts.forEach((item) => {
				if (item.email === currentUserEmail) {
					item.cart.forEach((item) => {
						if (item.id === id) {
							item.totalCount = totalCount;
						}
					});
				}
			});
			res.status(200).json(userCartItemByID);
		}
	}
	if (req.method === 'DELETE') {
		if (currentUserEmail) {
			const cartItem = req.body;
			const cartItemIndex = currentUserCart?.cart.findIndex(
				(item) => item.id == cartItem.id
			);
			carts.forEach((item) => {
				if (item.email === currentUserEmail) {
					item.cart.splice(cartItemIndex, 1);
				}
			});
			res.status(200).json(currentUserCart);
		}
	}
	if (req.method === 'PUT') {
		if (currentUserEmail) {
			const cartItem = req.body;

			const addToCart = currentUserCart?.cart.some(
				(item) => item.id === cartItem.id
			);

			if (!addToCart) {
				currentUserCart?.cart.push(cartItem)
				res.status(200).json(currentUserCart);
			}
		}
	}

	res.status(200).json({});
}
