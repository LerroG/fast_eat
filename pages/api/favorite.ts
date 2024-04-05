import type { NextApiRequest, NextApiResponse } from 'next';
import { favorites } from './data/favorites';
import { getToken } from 'next-auth/jwt';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const token = await getToken({ req });
	const currentUserEmail = token?.email;
	const currentUserFavorites = favorites.find(
		(item) => item.email === currentUserEmail
	);

	if (req.method === 'GET') {
		if (currentUserEmail) {
			res.status(200).json(currentUserFavorites?.favorite);
		}
		res.status(200).json([]);
	}

	if (req.method === 'DELETE') {
		if (currentUserEmail) {
			const favoriteItem = req.body;
			const favoriteItemIndex = currentUserFavorites?.favorite.findIndex(
				(item) => item.id == favoriteItem.id
			);
			favorites.forEach((item) => {
				if (item.email === currentUserEmail) {
					item.favorite.splice(favoriteItemIndex, 1);
				}
			});
			res.status(200).json(currentUserFavorites);
		}
	}
	if (req.method === 'PUT') {
		if (currentUserEmail) {
			const favoriteItem = req.body;

			const addToCart = currentUserFavorites?.favorite.some(
				(item) => item.id === favoriteItem.id
			);

			if (!addToCart) {
				currentUserFavorites?.favorite.push(favoriteItem);
				res.status(200).json(currentUserFavorites);
			}
		}
	}

	res.status(200).json({});
}
