
import { motion } from "framer-motion";
import Link from "next/link";
import styled, { css }  from "styled-components";

type ButtonProps = {
	motionless?:boolean;
	href?: string | object;
	className?: string;
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & CustomButtonProps;


type CustomButtonProps = {
	primary?: boolean |string  | number;
	disable?: boolean	|string | number ;
	rounded?: boolean  |string | number;
	small?: boolean  |string | number;
	large?: boolean |string  | number;
	border?: boolean |string  | number;
	dark?: boolean |string | number;
};

const ButtonWrapperStyled = styled.div``
const ButtonStyled = styled.button<CustomButtonProps>`

display: flex;
justify-content: center;
align-items:center;
height:50px;
width:160px;
font-size:18px;
letter-spacing:-1px;
color: white;
border-radius:0px;
background-color:white;

${({ large }) =>
		large ?
		`
  // các style cho large button
	height:80px;
	width:240px;
	font-size:24px;
`:``}
${({ small }) =>
		small &&
		`
  // các style cho small button
	height:40px;
	width:120px;
	font-size:14px;
`};

${({ primary }) =>
		primary &&
		`
  // các style cho primary button
	background-color:white;
	color:black;
`};


${( {dark}  )=>
	dark ?
		`
  // các style cho dark button
	background-color:black;
	color:#aaff64;
	
`:``};

${({ disable }) =>
	disable &&
		`
  // các style cho disable button
	opacity: 0.35;
	cursor: auto;
	pointer-events: none;
`};

${({rounded}) =>rounded &&  `border-radius: 999px; `}


`

function Button({
	motionless=false,
	href,
	primary = false,
	disable = false,
	rounded = false,
	small = false,
	large = false,
	border = false,
	dark=false,
	className,
	children,
	onClick,
	...passProps
}: ButtonProps) {
	let Comp: React.ElementType = 'button';
	const props = { onClick, href, ...passProps };

	if (disable) {
		Object.keys(props).forEach((key) => {
			if (key.startsWith('on') && typeof props[key] === 'function') {
				delete props[key];
			}
		});
	}
	if (href) {
		Comp = Link;
		props.href = href;
	}	
	
	return (
		<Comp {...props} className={className} >
				<ButtonStyled
					as={motion.span}
					whileHover={{scale:1.1}}
					whileTap={{scale:0.95}}
					whileInView={{opacity:1,y:0,  }}
					initial={{opacity:0, y: !motionless?100 :null}}
					transition={{duration:0.3}}
					dark={+dark}
					primary = {+primary}
					disable = {+disable}
					rounded = {+rounded}
					small = {+small}
					large = {+large}
					border = {+border}

				>
								{children}
				</ButtonStyled>
		</Comp>
	);
}

export default Button;
