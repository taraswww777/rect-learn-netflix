import {SET_SEARCH_SORT_BY, SET_SEARCH_QUERY, DO_SEARCH_QUERY, SET_SEARCH_FILTER_BY} from "../../reducers/ReducerFilms";

export default function SearchBarDispatch(dispatch) {
	return {
		setSearchQuery: (searchQuery) => {
			dispatch({type: SET_SEARCH_QUERY, payload: searchQuery});
		},

		searchFilm: () => {
			dispatch({type: DO_SEARCH_QUERY});
		},

		setSearchBy: (searchBy = 'title') => {
			return () => {
				dispatch({type: SET_SEARCH_FILTER_BY, payload: searchBy});
			}
		},
		setSortBy: (sortBy = 'date') => {
			return () => {
				dispatch({type: SET_SEARCH_SORT_BY, payload: sortBy });
			}
		}
	};
}
