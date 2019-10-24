/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

export default ({ size = '1em', ...props }) => (
	<svg
		{...props}
		xmlns='http://www.w3.org/2000/svg'
		width={size}
		height={size}
		fill='currentcolor'
		viewBox='0 0 24 24'
		sx={{
			display: 'block',
			margin: 0,
		}}
	/>
);
