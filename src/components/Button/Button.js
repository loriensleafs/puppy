/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

export default props => (
	<Box
		as={props.href ? 'a' : 'button'}
		{...props}
		sx={{
			appearance: 'none',
			fontFamily: 'inherit',
			fontSize: 1,
			fontWeight: 'bold',
			m: 0,
			px: 2,
			py: 2,
			color: 'text',
			bg: 'muted',
			border: 0,
			borderRadius: 2,
			':focus': {
				outline: '2px solid',
			},
		}}
	/>
);
