import {
	FINISH_LOAD_FILM_DETAIL,
	FINISH_LOAD_FILM_SIMILAR,
	LOAD_FILM_DETAIL_BY_ID,
	LOAD_FILM_SIMILAR,
	SET_FILM_CURRENT_ID, START_LOAD_FILM_DETAIL, START_LOAD_FILM_SIMILAR,
} from '../../reducers/ReducerFilms';


export default function FilmDetailDispatch(dispatch: Function) {

	return {
		setCurrentFilmDetailById: (FILM_ID: number) => {
			dispatch({type: SET_FILM_CURRENT_ID, payload: FILM_ID});
		},

		loadDetailById: (FILM_ID: number) => {
			const async = () => {
				dispatch({type: START_LOAD_FILM_DETAIL});
				dispatch({type: START_LOAD_FILM_SIMILAR});
				return (dispatch: Function) => setTimeout(() => {
					dispatch({type: LOAD_FILM_DETAIL_BY_ID, payload: FILM_ID});
					dispatch({type: SET_FILM_CURRENT_ID, payload: FILM_ID});
					dispatch({type: FINISH_LOAD_FILM_DETAIL});
					const asyncSimilar = () => (dispatch: Function) => setTimeout(() => {
						dispatch({type: LOAD_FILM_SIMILAR});
						dispatch({type: FINISH_LOAD_FILM_SIMILAR});
					}, 500);

					dispatch(asyncSimilar());
				}, 1000);
			};


			dispatch(async());
		},
	};
}
