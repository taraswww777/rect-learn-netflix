import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BFilmItem_NotFound = styled.div``;
const BFilmItem_link = styled(Link)`
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
const BFilmItem_cover = styled.img`
	max-width: 100%;
	margin: 0 auto;
`;
const BFilmItem_info = styled.div`		
	position: relative;
	margin: 10px 0 0;
	width: 100%;
	line-height: 1;
`;
const BFilmItem_title = styled.div`
	width: 100%;
	font-size: 1.5rem;
`;
const BFilmItem_year = styled.div`
	border: 1px solid #000;
	position: absolute;
	right: 0;
	top: 0;
	padding: 0 5px;
`;
const BFilmItem_genre = styled.div`
	width: 100%;
	font-size: 0.75rem;
	color: #444444;
`;

class FilmItem extends Component {

	render() {
		return (
			!this.props.film
				? <BFilmItem_NotFound>
					data about film not found
				</BFilmItem_NotFound>
				:
				<BFilmItem_link to={`/film/${this.props.film.id}`}>
					<BFilmItem_cover
						src={this.props.film.previewPicture}
						alt={this.props.film.title}
						title={this.props.film.title}/>
					<BFilmItem_info>
						<BFilmItem_title>{this.props.film.title}</BFilmItem_title>
						<BFilmItem_year>{this.props.film.year}</BFilmItem_year>
						<BFilmItem_genre>{this.props.film.genre}</BFilmItem_genre>
					</BFilmItem_info>
				</BFilmItem_link>
		);
	}
}

export default FilmItem;
