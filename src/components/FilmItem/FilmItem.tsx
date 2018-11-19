import React, {Component} from 'react';
import {
	BFilmItem_cover, BFilmItem_genre,
	BFilmItem_info,
	BFilmItem_link,
	BFilmItem_NotFound,
	BFilmItem_title,
	BFilmItem_year
} from "./FilmItemStyled";

import {FilmItemProps} from "./FilmItemInterfaces";


class FilmItem extends Component <FilmItemProps> {

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
