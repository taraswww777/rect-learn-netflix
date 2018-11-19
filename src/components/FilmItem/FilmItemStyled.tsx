import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const BFilmItem_NotFound = styled.div``;
export const BFilmItem_link = styled(Link)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 10px;
	text-decoration: none;
	color: #000;
	align-items: flex-start;
	
	:hover {
		cursor: pointer;
		transition: 1s;
		background: rgba(0, 0, 0, 0.5);
	}
`;
export const BFilmItem_cover = styled.img`
	max-width: 100%;
	margin: 0 auto;
`;
export const BFilmItem_info = styled.div`		
	position: relative;
	margin: 10px 0 0;
	width: 100%;
	line-height: 1;
`;
export const BFilmItem_title = styled.div`
	width: 100%;
	font-size: 1.5rem;
`;
export const BFilmItem_year = styled.div`
	border: 1px solid #000;
	position: absolute;
	right: 0;
	top: 0;
	padding: 0 5px;
`;
export const BFilmItem_genre = styled.div`
	width: 100%;
	font-size: 0.75rem;
	color: #444444;
`;
