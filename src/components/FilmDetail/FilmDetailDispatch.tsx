import {
	BASE_URL, FINISH_LOAD_FILM_DETAIL, FINISH_LOAD_FILM_SIMILAR,
	SET_FILM_CURRENT_ID, SET_FILM_DETAIL, SET_FILM_SIMILAR, START_LOAD_FILM_DETAIL, START_LOAD_FILM_SIMILAR,
} from '../../reducers/ReducerFilms';
import {InterfaceFilm} from "../../types/InterfaceFilm";
import {TypeDispatch} from "../../types/TypeDispatch";

export type TypeLoadDetailById = (FILM_ID: string) => void;
export type TypeSetCurrentFilmDetailById = (FILM_ID: string) => void;

export default function FilmDetailDispatch(dispatch: TypeDispatch) {

	return {
		setCurrentFilmDetailById: (FILM_ID: string) => {
			dispatch({type: SET_FILM_CURRENT_ID, payload: FILM_ID});
		},

		loadDetailById: (FILM_ID: string): void => {
			const url = encodeURI(`${BASE_URL}/api/film/${FILM_ID}`);
			dispatch({type: START_LOAD_FILM_DETAIL});

			fetch(url)
				.then(response => response.json())
				.then(filmDetailJson => {
					dispatch({type: SET_FILM_DETAIL, payload: filmDetailJson});
					return filmDetailJson;
				})
				.then(filmDetailJson => {
					dispatch({type: SET_FILM_CURRENT_ID, payload: FILM_ID});
					return filmDetailJson;
				})
				.then(filmDetailJson => {
					dispatch({type: FINISH_LOAD_FILM_DETAIL});
					return filmDetailJson;
				})
				.then(filmDetailJson => {
					dispatch({type: START_LOAD_FILM_SIMILAR});
					return filmDetailJson;
				})
				.then((filmDetailJson: InterfaceFilm) => {
					const urlSimilar = `${BASE_URL}/api/film-genre/${filmDetailJson.genre}`;
					fetch(urlSimilar)
						.then(response => response.json())
						.then(listFilmSimilar => dispatch({type: SET_FILM_SIMILAR, payload: listFilmSimilar}))
						.then(() => dispatch({type: FINISH_LOAD_FILM_SIMILAR}))
						.catch(reason => {
							console.log('reason: ', reason);
						});
				})
				.catch(reason => {
					console.log('reason: ', reason);
				});
		},
	};
}
