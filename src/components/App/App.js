/** @jsx jsx */
import { ThemeProvider, jsx, Styled, Layout, Main, Container } from 'theme-ui';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Global } from '@emotion/core';
import Header from './../Header';
import Feed from './../Feed'
import theme from './../../theme';

import { defaults, resolvers } from './../../resolvers';
import { typeDefs } from './../../schemas';

const cache = new InMemoryCache();
const client = new ApolloClient({
	uri: 'https://dog-graphql-api.glitch.me/graphql',
	cache,
	resolvers,
	typeDefs,
});

cache.writeData({
	data: defaults,
});

window.appcache = cache;

const App = props => (
	<ApolloProvider client={client}>
		<ThemeProvider theme={theme}>
			<Styled.root>
				<Global
					styles={{
						'*': {
							boxSizing: 'border-box',
						},
						body: {
							margin: 0,
						},
					}}
				/>
				<Layout>
					<Header />
					<Main>
						<Container
							sx={{
								py: 4,
								px: 3,
							}}
						>
							<Feed />
						</Container>
					</Main>
				</Layout>
			</Styled.root>
		</ThemeProvider>
	</ApolloProvider>
);

export default App;
