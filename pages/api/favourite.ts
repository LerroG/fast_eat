import type { NextApiRequest, NextApiResponse } from 'next';
import { favourites } from './data/favourites';
import { getToken } from 'next-auth/jwt';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const token = await getToken({ req });
	const currentUserEmail = token?.email;
	const currentUserFavourites = favourites.find(
		(item) => item.email === currentUserEmail
	);

	if (req.method === 'GET') {
		if (currentUserEmail) {
			res.status(200).json(currentUserFavourites?.favourite);
		}
	}

	if (req.method === 'DELETE') {
		if (currentUserEmail) {
			const favouriteItem = req.body;
			const favouriteItemIndex = currentUserFavourites?.favourite.findIndex(
				(item) => item.id == favouriteItem.id
			);
			favourites.forEach((item) => {
				if (item.email === currentUserEmail) {
					item.favourite.splice(favouriteItemIndex, 1);
				}
			});
			res.status(200).json(currentUserFavourites);
		}
	}
	if (req.method === 'PUT') {
		if (currentUserEmail) {
			const favouriteItem = req.body;

			const addToCart = currentUserFavourites?.favourite.some(
				(item) => item.id === favouriteItem.id
			);

			if (!addToCart) {
				currentUserFavourites?.favourite.push(favouriteItem);
				res.status(200).json(currentUserFavourites);
			}
		}
	}

	res.status(200).json({});
}
