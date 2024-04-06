import jwt, { JwtPayload } from 'jsonwebtoken';

interface SignOption {
	expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
	expiresIn: '1h',
};

const secretKey = process.env.SECRET_KEY as string;

export function signJwtAccessToken(
	payload: JwtPayload,
	options: SignOption = DEFAULT_SIGN_OPTION
) {
	const token = jwt.sign(payload, secretKey, options);
	return token;
}

export function verifyJwt(token: string) {
	try {
		const decoded = jwt.verify(token, secretKey);
		return decoded as JwtPayload;
	} catch (error) {
		console.error(error);
	}
}
