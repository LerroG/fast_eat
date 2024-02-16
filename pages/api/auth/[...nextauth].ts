import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import type { NextAuthOptions, User } from 'next-auth';
import users from '../data/users.json'

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

        const currentUser = users.users.find(user => user.email === credentials.email)

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
        }

        return null
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token, user }) {
			session.user = token;

			return session;
		},
	},

	pages: {
		signIn: '/auth',
	},
};

export default NextAuth(authOptions);
