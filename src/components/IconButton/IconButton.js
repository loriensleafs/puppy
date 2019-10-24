/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

export default props => (
	<Box
		title='Toggle Menu'
		as={props.href ? 'a' : 'button'}
		{...props}
		sx={{
			fontFamily: 'inherit',
			fontSize: 24,
			color: 'inherit',
			bg: 'transparent',
			width: 32,
			height: 32,
			p: 1,
			m: 0,
			border: 0,
			appearance: 'none',
			':focus': {
				outline: '2px solid',
			}
		}}
	/>
);
