import styled from "styled-components";

export const BApp = styled.div` 
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const BAppHeader = styled.div`
	background:#ccc;
	padding: 5px 0;
	width: 100%;
`;
export const BAppFooter = styled(BAppHeader)``;
export const BAppHeaderSearchBar = styled.div``;
export const BAppHeaderContent = styled.div`
	width: 100%;
	flex-grow: 1;
`;


