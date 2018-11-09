import {LOAD_FILM_DETAIL_BY_ID} from "../../reducers/ReducerFilms";

export default function FilmDetailDispatch(dispatch) {
	return {
		loadDetailById: (FILM_ID) => {
			dispatch({type: LOAD_FILM_DETAIL_BY_ID, payload: FILM_ID});
		},
	};
}
