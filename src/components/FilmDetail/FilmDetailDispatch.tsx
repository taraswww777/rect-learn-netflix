import {
	BASE_URL, FINISH_LOAD_FILM_DETAIL, FINISH_LOAD_FILM_SIMILAR,
	SET_FILM_CURRENT_ID, SET_FILM_DETAIL, SET_FILM_SIMILAR, START_LOAD_FILM_DETAIL, START_LOAD_FILM_SIMILAR,
} from '../../reducers/ReducerFilms';
import {InterfaceFilm} from "../../types/InterfaceFilm";

// TODO: declarate (dispatch: Function)

export default function FilmDetailDispatch(dispatch: Function) {

	return {
		setCurrentFilmDetailById: (FILM_ID: number) => {
			dispatch({type: SET_FILM_CURRENT_ID, payload: FILM_ID});
		},

		loadDetailById: (FILM_ID: string): void => {
			const url = `${BASE_URL}/api/film/${FILM_ID}`;
			// console.log('url:', url);

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

			// dispatch({type: START_LOAD_FILM_DETAIL});
			// dispatch({type: LOAD_FILM_DETAIL_BY_ID, payload: {filmId: FILM_ID}});

			// const async = () => {
			// 	dispatch({type: START_LOAD_FILM_SIMILAR});
			// 	return (dispatch: Function) => setTimeout(() => {
			// 		dispatch({type: LOAD_FILM_DETAIL_BY_ID, payload: FILM_ID});
			// 		dispatch({type: SET_FILM_CURRENT_ID, payload: FILM_ID});
			// 		dispatch({type: FINISH_LOAD_FILM_DETAIL});
			// 		const asyncSimilar = () => (dispatch: Function) => setTimeout(() => {
			// 			dispatch({type: LOAD_FILM_SIMILAR});
			// 			dispatch({type: FINISH_LOAD_FILM_SIMILAR});
			// 		}, 500);
			//
			// 		dispatch(asyncSimilar());
			// 	}, 1000);
			// };
			// dispatch(async());
		},
	};
}
