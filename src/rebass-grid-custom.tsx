import { Box, Flex } from '@rebass/grid';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from './logo.svg';

export const settings = {
	colors: {
		red: '#e50914'
	}
};

export const Container = (props?:any) =>
	<Box
		{...props}
		mx='auto'
		px={2}
		css={{
			maxWidth: '1024px',
		}}
	/>;

export const Row = (props?:any) => (
	<Flex
		{...props}
		mx={-2}
		css={{
			'flex-wrap': 'wrap'
		}}
	/>
);

export const Ceil = (props?:any) => (
	<Box
		{...props}
		px={2}
	/>
);

export const H1 = styled.h1`
	color: green;
`;

export const LINK = styled(Link)`
	text-decoration: none;
	color: #000;
`;


export const PreLoader = styled.div`
	text-decoration: none;
	color: #000;
	background: url(${logo}) no-repeat center center;
	transition: infiniti;
	width: 200px;
	height: 200px;
	min-width: 200px;
	min-height: 200px;
	max-width: 100%;
	margin: 0 auto;
	animation: main-rotate 5s infinite linear;
	
	@keyframes main-rotate {
		from{
			transform: rotate(0deg);
		}

	  to {
	    transform: rotate(360deg);
	  }
}
`;

export function isKeyEnter(event:any) {
	return event.key.toLowerCase() === 'enter';
}
