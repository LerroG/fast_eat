import type { NextApiRequest, NextApiResponse } from 'next';
import users from './data/users.json';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	
		res.status(200).json(users);
	}