/** @jsx jsx */
import { jsx, Header, Container, Flex } from 'theme-ui';
import { Heading } from '@theme-ui/components';
import { Link } from '@reach/router';
import IconButton from './../IconButton';
import { Favorite } from './../svgs';

export default ({ children, ...props }) => (
	<Header>
		<Container>
			<Flex
				sx={{ justifyContent: 'space-between', alignItems: 'center' }}
			>
				<Heading as='h3'>
					<Link
						to='/'
						sx={{ color: 'inherit', textDecoration: 'none' }}
					>
						Pupstagram
					</Link>
				</Heading>

				<IconButton as={Link} to='likes'>
					<Favorite sx={{ color: 'text' }} />
				</IconButton>
			</Flex>
		</Container>
	</Header>
);
