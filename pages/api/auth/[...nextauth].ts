import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import type { NextAuthOptions, User } from 'next-auth';

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
				const res = await fetch('http://localhost:3000/api/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password,
					}),
				});
				if (res.status === 401) return null;
				const user = await res.json();

				if (user) {
					// Any object returned will be saved in `user` property of the JWT
					return user as User;
				} else {
					// If you return null then an error will be displayed advising the user to check their details.
					return null;

					// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user, trigger, session }) {
			if (trigger === 'update') {
				return { ...token, ...session.user };
			}
			return { ...token, ...user };
		},

		async session({ session, token }) {
			session.user = token as any;
			return session;
		},
	},

	pages: {
		signIn: '/auth',
	},
};

export default NextAuth(authOptions);
