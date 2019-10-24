import React from 'react';
import {
	Card,
	Image,
	Text,
	Heading,
	Box,
	Flex,
	Grid,
} from '@theme-ui/components';
import { Link } from '@reach/router';
import ItemList from './../ItemList';
import Loader from './../Loader';

import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_DOGS = gql`
	{
		dogs {
			id
			breed
			displayImage
		}
	}
`;

const Feed = props => {
	const { loading, error, data, client } = useQuery(GET_DOGS);

	return (
		<Flex
			sx={{
				direction: 'row',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{loading && <Loader />}
			{error && <Text sx={{ color: 'red' }}>Something went wrong!</Text>}
			{!loading &&
				!error &&
				data.dogs.map(dog => (
					<Card key={dog.id} sx={{ width: '200px', m: 1 }}>
						<Flex
							sx={{
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Image src={dog.displayImage} />
							<Text>{dog.breed}</Text>
						</Flex>
					</Card>
				))}
		</Flex>
	);
};

export default Feed;
