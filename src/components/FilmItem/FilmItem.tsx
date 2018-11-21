import React from 'react';
import {InterfaceFilmProps} from "../../types/InterfaceFilm";
import {
	BFilmItem_cover, BFilmItem_genre,
	BFilmItem_info,
	BFilmItem_link,
	BFilmItem_NotFound,
	BFilmItem_title,
	BFilmItem_year
} from "./FilmItemStyled";


const FilmItem = (filmProps: InterfaceFilmProps) => (
	!filmProps
		? <BFilmItem_NotFound>
			data about film not found
		</BFilmItem_NotFound>
		:
		<BFilmItem_link to={`/film/${filmProps.film.id}`}>
			<BFilmItem_cover
				src={filmProps.film.previewPicture}
				alt={filmProps.film.title}
				title={filmProps.film.title}/>
			<BFilmItem_info>
				<BFilmItem_title>{filmProps.film.title}</BFilmItem_title>
				<BFilmItem_year>{filmProps.film.year}</BFilmItem_year>
				<BFilmItem_genre>{filmProps.film.genre}</BFilmItem_genre>
			</BFilmItem_info>
		</BFilmItem_link>
);

export default FilmItem;
