import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import spotifyAPI, { LOGIN_URL } from '../../../lib/spotify';

const refreshAccessToken = async token => {
	try {
		spotifyAPI.setAccessToken(token.accessToken);
		spotifyAPI.setAccessToken(token.refreshToken);

		const { body: refreshedToken } = await spotifyAPI.refreshAccessToken();
		return {
			...token,
			accessToken: refreshedToken.access_token,
			// Expires 1 hour from now
			accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
			refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
		};

	} catch (error) {
		console.error(error);
		return {
			...token,
			error: 'RefreshAccessTokenError',
		};
	}
};

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		SpotifyProvider({
			clientId: process.env.SPOTIFY_CLIENT_ID,
			clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
			authorization: LOGIN_URL,
		}),
		// ...add more providers here
	],
	secret: process.env.JWT_SECRET,
	pages: {
		signIn: '/login',
	},
	callbacks: {
		async jwt({ token, account, user }) {
			if (account && user) {
				// Initial Sign In
				return {
					...token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					username: account.providerAccountId,
					accessTokenExpires: account.expires_at * 1000,
				};
			}
			// Return Token when not expired
			if (Date.now() < token.accessTokenExpires) {
				console.log('EXISTING ACCESS TOKEN IS VALID');
				return token;
			}
			// Update/Refresh token when expired
			console.log('EXISTING ACCESS TOKEN HAS EXPIRED, REFRESHING ...');
			return await refreshAccessToken(token);
		},
	},

	async session({ session, token }) {
		session.user.accessToken = token.accessToken;
		session.user.refreshToken = token.refreshToken;
		session.user.username = token.username;

		return session
	}
});
