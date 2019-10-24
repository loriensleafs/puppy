/** @jsx jsx */
import { jsx } from 'theme-ui';
import { keyframes } from '@emotion/core';

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(270deg);
	}
`;

const dash = keyframes`
	0% {
		stroke-dashoffset: 187;
	}

    50% {
		transform: rotate(135deg);
		stroke-dashoffset: ${187 / 4};
	}

	100% {
		transform: rotate(450deg);
		stroke-dashoffset: 187;
	}
`;

export default ({ color = 'white', size = '50', ...props }) => (
	<svg
		{...props}
		viewBox='0 0 66 66'
		width={size}
		height={size}
		sx={{ animation: `${rotate} 1.5s linear infinite` }}
	>
		<circle
			fill='none'
			strokeWidth='4'
			cx='33'
			cy='33'
			r='30'
			sx={{
				stroke: color,
				strokeDashoffset: 0,
				transformOrigin: 'center',
				strokeDasharray: 187,
				animation: `${dash} 1.5s ease-in-out infinite`,
			}}
		/>
	</svg>
);
