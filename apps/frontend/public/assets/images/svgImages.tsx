
// export const svgCardWrapper = ({ width, height, className }) => (
// 	<svg
// 		className={className}
// 		width={width}
// 		height={height}
// 		viewBox="0 0 337 525"
// 		fill="none" 
//         xmlns="http://www.w3.org/2000/svg"
// 	>
// 		<path d="M336.5 524.5H0.5V0.5H266.295L336.5 69.7092V524.5Z" fill="white" stroke="#0D0D0D"></path> <rect x="251" width="1" height="525" fill="#0D0D0D"></rect></svg>
// );

import React from 'react';

interface SvgCardWrapperProps {
  width: number| string;
  height: number| string;
  className?: string;
}

export const SvgCardWrapper: React.FC<SvgCardWrapperProps> = ({ width, height, className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={`0 0 337 525`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M336.5 524.5H0.5V0.5H266.295L336.5 69.7092V524.5Z" fill="white" stroke="#0D0D0D"></path>
    <rect x="251" width="1" height="525" fill="#0D0D0D"></rect>
  </svg>
);




