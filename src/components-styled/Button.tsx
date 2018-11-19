import styled, {css} from 'styled-components';

const settings = {
	mainColor: 'red',
};

export const listButtonStatus = {
	active: 'active',
};

export const listButtonTypes = {
	big: 'big',
};

export interface ButtonProps {
	status: string | boolean
}

export const Button = styled.button<ButtonProps>`
	background: #fff;
	border-radius: 5px;
	border: 2px solid ${settings.mainColor};
	color: ${settings.mainColor};
	margin: 0.5em 0 0.5em 0.5em;
	padding: 0.25em 1em;
	display: inline;
	font-size: 1rem;
	cursor:pointer;
	text-transform: uppercase;
	
	${props => props.status === listButtonStatus.active && css`
		background:${settings.mainColor};
		color: white;
	`}
	
	${props => props.type === listButtonTypes.big && css`
		font-size: 1.5rem;
	`}
	
	:hover{
		background:#666666;
		color: #fff;
		border-color: #fff;
	}
`;
