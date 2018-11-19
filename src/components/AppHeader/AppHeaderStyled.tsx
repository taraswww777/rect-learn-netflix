import styled from 'styled-components';
import {settings} from '../../rebass-grid-custom';

export const BAppHeader = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
`;
export const BAppHeaderTitle = styled.div`
 	color: ${settings.colors.red};
 	text-transform: uppercase;
 	font-size: 2rem;
 	font-style: italic;
 	font-weight: bold;
 `;

export const BAppHeaderSearchLink = styled.div``;
