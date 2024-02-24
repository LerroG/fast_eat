import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import type { NextAuthOptions, User } from 'next-auth';
import users from '../data/users.json';

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'email',
					type: 'email',
					required: true,
				},
				password: {
					label: 'password',
					type: 'password',
					required: true,
				},
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) return null;

				const currentUser = users.users.find(
					(user) => user.email === credentials.email
				);

				if (currentUser && currentUser.password === credentials.password) {
					const { password, ...userWithoutPass } = currentUser;

					return userWithoutPass as User;
				}

				return null;
			},
		}),
	],
	// callbacks: {
	// 	async jwt({ user, token, session, account,profile }) {
	// 		console.log({ user, token, session, account, profile });
	// 		return token;
	// 	},
	// 	async session({ session, token, user }) {
	// 		return session;
	// 	},
	// },
	// secret: process.env.NEXTAUTH_SECRET,
	// session: {
	// 	strategy: 'jwt',
	// },

	pages: {
		signIn: '/auth',
	},
};

export default NextAuth(authOptions);
