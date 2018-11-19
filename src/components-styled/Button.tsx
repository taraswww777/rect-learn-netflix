import * as React from "react";
import {Link, LinkProps} from "react-router-dom";
import styled, {css} from 'styled-components';

const settings = {
	mainColor: 'red',
};

export const listStatus = {
	active: 'active',
};

export const listTypes = {
	big: 'big',
};

export interface InterfaceButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	status: string | boolean
}

export const Button = styled.button<InterfaceButtonProps>`
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


export interface InterfaceLINKProps extends LinkProps {
	status?: string | boolean;
}

export const LINK = styled(Link)<InterfaceLINKProps>`
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
