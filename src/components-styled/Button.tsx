import styled, {css} from 'styled-components';
import {Link, LinkProps} from "react-router-dom";
import * as React from "react";

const settings = {
	mainColor: 'red',
};

export const listStatus = {
	active: 'active',
};

export const listTypes = {
	big: 'big',
};

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
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
	
	${props => props.status === listStatus.active && css`
		background:${settings.mainColor};
		color: white;
	`}
	
	${props => props.type === listTypes.big && css`
		font-size: 1.5rem;
	`}
	
	:hover{
		background:#666666;
		color: #fff;
		border-color: #fff;
	}
`;


export interface LINKProps extends LinkProps {
	status?: string | boolean;
}

export const LINK = styled(Link)<LINKProps>`
	background: #fff;
	border-radius: 5px;
	border: 2px solid ${settings.mainColor};
	color: ${settings.mainColor};
	margin: 0.5em 0 0.5em 0.5em;
	padding: 0.25em 1em;
	display: inline-block;
	font-size: 1rem;
	cursor:pointer;
	text-transform: uppercase;
	text-decoration: none;
	
	${props => props.status === listStatus.active && css`
		background:${settings.mainColor};
		color: white;
	`}
	
	${props => props.type === listTypes.big && css`
		font-size: 1.5rem;
	`}
	
	:hover{
		background:#666666;
		color: #fff;
		border-color: #fff;
	}
`;
