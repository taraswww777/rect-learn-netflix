import {
	BASE_URL,
	FINISH_SEARCH_QUERY,
	SET_SEARCH_FILTER_BY,
	SET_SEARCH_QUERY, SET_SEARCH_RESULT,
	SET_SEARCH_SORT_BY, START_SEARCH_QUERY,
} from '../../reducers/ReducerFilms';

function searchFilm(dispatch: Function) {
	return (searchQuery: string, searchBy: string = 'title', sortBy: string = 'date') => {
		return () => {
			dispatch({type: START_SEARCH_QUERY});
			const url = encodeURI(`${BASE_URL}/api/search/${searchQuery.toString().replace(/\//g, '\\')}/${searchBy}/${sortBy}`);

			fetch(url)
				.then(response => response.json())
				.then(searchResult => dispatch({type: SET_SEARCH_RESULT, payload: searchResult}))
				.then(() => dispatch({type: FINISH_SEARCH_QUERY}))
				.catch(reason => {
					console.log('reason: ', reason);
				});
		}
	}
}

export default function SearchBarDispatch(dispatch: Function) {
	return {
		onSetSearchQuery: (searchQuery?: string) => {
			if (searchQuery) {
				dispatch({type: SET_SEARCH_QUERY, payload: searchQuery.toString().toLowerCase()});
			}
		},

		onSearchFilm: searchFilm(dispatch),

		onSetSearchBy: (searchQuery: string = '', sortBy: string = 'date') => {
			return (searchBy: string = 'title') => () => {
				dispatch({type: SET_SEARCH_FILTER_BY, payload: searchBy});
				searchFilm(dispatch)(searchQuery, searchBy, sortBy)();
			}
		},

		onSetSortBy: (searchQuery: string = '', searchBy: string = 'title') => {
			return (sortBy: string = 'date') => () => {
				dispatch({type: SET_SEARCH_SORT_BY, payload: sortBy});
				searchFilm(dispatch)(searchQuery, searchBy, sortBy)();
			}
		}
	};
}
