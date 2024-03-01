import type { NextApiRequest, NextApiResponse } from 'next';
import { users } from './data/users';
import { signJwtAccessToken } from '@/lib/jwt';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { email, password } = req.body;

	if (req.method === 'POST') {
		if (!email || !password) {
			res.status(401).json({ message: 'Unathenticated' });
		}

		const user = users.find((user) => email === user.email);

		if (user && password === user.password) {
			const { password, ...userWithoutPass } = user;
			const accessToken = signJwtAccessToken(userWithoutPass);

			const result = {
				...userWithoutPass,
				accessToken,
			};
			res.status(200).json(result);
		} else {
			res.status(401).json({ message: 'Unathenticated' });
		}
	}
}
