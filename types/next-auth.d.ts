import NextAuth from 'next-auth/jwt';
import { User } from './user';

declare module 'next-auth/jwt' {
	interface JWT {
		user?: User;
	}

	interface JWT extends User {}
}
