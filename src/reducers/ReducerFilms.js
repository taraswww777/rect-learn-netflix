export const LOAD_FILM_LIST = 'LOAD_FILM_LIST';
export const LOAD_FILM_DETAIL_BY_ID = 'LOAD_FILM_DETAIL_BY_ID';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const DO_SEARCH_QUERY = 'DO_SEARCH_QUERY';
export const SET_SEARCH_FILTER_BY = 'SET_SEARCH_FILTER_BY';
export const SET_SEARCH_SORT_BY = 'SET_SEARCH_SORT_BY';

const stateDefault = {
	listFilms: [],
	filmDetail: {},
	searchQuery: null,
	searchBy: 'title',
	sortBy: 'date',
	searchResults: []
};

function compareFilmRating(filmA, filmB) {
	return filmA.rating - filmB.rating;
}

function compareFilmTitle(filmA, filmB) {
	if (filmA.title < filmB.title) {
		return -1;
	} else if (filmA.title > filmB.title) {
		return 1;
	}
	return 0;
}

function compareFilmDate(filmA, filmB) {
	return filmA.year - filmB.year;
}

function loadFilms() {
	return require('../demoListFilms');
}

function filterByTitle(listFilms = [], searchQuery) {
	let resultListSearch = [];

	listFilms
		.filter((film) => film.title.toLowerCase().indexOf(searchQuery) > -1)
		.map((film) => resultListSearch.push(film));

	return resultListSearch;
}

function filterByGenre(listFilms = [], searchQuery) {
	let resultListSearch = [];
	listFilms
		.filter((film) => film.genre.toLowerCase().indexOf(searchQuery) > -1)
		.map((film) => resultListSearch.push(film));

	return resultListSearch;
}

function filterById(listFilms = [], filmId) {
	let resultListSearch = {};
	listFilms
		.filter((film) => film.id.toLowerCase().indexOf(filmId) > -1)
		.map((film) => resultListSearch = film);

	return resultListSearch;
}

function sortSearchResults(listFilms = [], sortBy = 'date') {
	if (!listFilms) {
		return listFilms;
	}

	switch (sortBy) {
		case'rating':
			listFilms.sort(compareFilmRating);
			break;
		case'date':
			listFilms.sort(compareFilmDate);
			break;
		case'title':
			listFilms.sort(compareFilmTitle);
			break;
		default:
			listFilms.sort(compareFilmRating);
			break;
	}
	return listFilms;
}

function searchFilm(state) {
	let filmList = loadFilms();
	let searchResults = [];

	if (!state.searchQuery) {
		return {
			...state
		}
	}

	switch (state.searchBy.toLowerCase()) {
		case 'genre':
			searchResults = filterByGenre(filmList, state.searchQuery.toLowerCase());
			break;
		case 'title':
			searchResults = filterByTitle(filmList, state.searchQuery.toLowerCase());
			break;
		default:
			searchResults = filterByTitle(filmList, state.searchQuery.toLowerCase());
			break;
	}
	return {...state, searchResults: sortSearchResults(searchResults, state.sortBy)};
}

function ReducerFilms(state = stateDefault, action) {
	console.log('ReducerFilms', action, state);

	switch (action.type) {
		case SET_SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload
			};

		case LOAD_FILM_LIST:
			return {
				...state,
				filmList: loadFilms()
			};

		case DO_SEARCH_QUERY:

			return searchFilm(state);
//
		case LOAD_FILM_DETAIL_BY_ID:
			return {
				...state,
				filmDetail: filterById(loadFilms(), action.payload.toLowerCase())
			};

		case SET_SEARCH_FILTER_BY:
			return searchFilm({...state, searchBy: action.payload});

		case SET_SEARCH_SORT_BY:
			return searchFilm({...state, sortBy: action.payload});

		default:
			return state;
	}
}

export default ReducerFilms;

