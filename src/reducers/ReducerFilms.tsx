import {InterfaceAction} from "../types/InterfaceAction";
import {InterfaceFilm} from "../types/InterfaceFilm";


export const START_SEARCH_QUERY = 'START_DO_SEARCH_QUERY';
export const FINISH_SEARCH_QUERY = 'FINISH_DO_SEARCH_QUERY';

export const START_LOAD_FILM_DETAIL = 'START_LOAD_FILM_DETAIL';
export const FINISH_LOAD_FILM_DETAIL = 'FINISH_LOAD_FILM_DETAIL';
export const START_LOAD_FILM_SIMILAR = 'START_LOAD_FILM_SIMILAR';
export const FINISH_LOAD_FILM_SIMILAR = 'FINISH_LOAD_FILM_SIMILAR';

export const SET_SEARCH_FILTER_BY = 'SET_SEARCH_FILTER_BY';
export const SET_SEARCH_SORT_BY = 'SET_SEARCH_SORT_BY';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_FILM_CURRENT_ID = 'SET_FILM_CURRENT_ID';
export const SET_FILM_DETAIL = 'SET_FILM_DETAIL';
export const SET_FILM_SIMILAR = 'SET_FILM_SIMILAR';
export const SET_SEARCH_RESULT = 'SET_SEARCH_RESULT';

export const BASE_URL = 'http://localhost:5000';

// @ts-ignore
const filmDetailDemo: InterfaceFilm = {};

interface InterfaceStateDefault {
	listFilms: InterfaceFilm[],
	filmDetail: InterfaceFilm | object | any,
	searchQuery: null,
	searchBy: string,
	sortBy: string,
	searchResults: InterfaceFilm[],
}

const stateDefault: InterfaceStateDefault = {
	filmDetail: filmDetailDemo,
	listFilms: [],
	searchBy: 'title',
	searchQuery: null,
	searchResults: [],
	sortBy: 'date',
};


function ReducerFilms(state = stateDefault, action: InterfaceAction) {
	switch (action.type) {

		case SET_FILM_DETAIL:
			return {
				...state,
				filmDetail: action.payload,
			};

		case SET_FILM_SIMILAR:
			return {
				...state,
				similarFilms: action.payload,
			};

		case SET_SEARCH_RESULT:
			return {
				...state,
				searchResults: action.payload,
			};

		case SET_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload,
			};

		case SET_FILM_CURRENT_ID:
			return {
				...state,
				filmId: action.payload,
			};

		case SET_SEARCH_FILTER_BY:
			return {
				...state,
				searchBy: action.payload,
			};

		case SET_SEARCH_SORT_BY:
			return {
				...state,
				sortBy: action.payload,
			};

		case START_SEARCH_QUERY:
			return {
				...state,
				SEARCH_QUERY_STATUS: false,
			};
		case FINISH_SEARCH_QUERY:
			return {
				...state,
				SEARCH_QUERY_STATUS: true,
			};

		case START_LOAD_FILM_DETAIL:
			return {
				...state,
				LOAD_FILM_DETAIL_STATUS: false,
			};
		case FINISH_LOAD_FILM_DETAIL:
			return {
				...state,
				LOAD_FILM_DETAIL_STATUS: true,
			};
		case START_LOAD_FILM_SIMILAR:
			return {
				...state,
				LOAD_FILM_SIMILAR_STATUS: false,
			};
		case FINISH_LOAD_FILM_SIMILAR:
			return {
				...state,
				LOAD_FILM_SIMILAR_STATUS: true,
			};

		default:
			return state;
	}
}

export default ReducerFilms;
