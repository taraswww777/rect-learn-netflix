export const LOAD_DATA_FILMS = 'LOAD_DATA_FILMS';
export const DATA_ADD = 'DATA_ADD';
export const LOAD_DATA_FILMS_BY_ALIAS = 'LOAD_DATA_FILMS_BY_ALIAS';
export const LOAD_DATA_SIMILAR_FILMS_BY_GENRE = 'LOAD_DATA_SIMILAR_FILMS_BY_GENRE';

export function DelReducer(state = {}, action = {}) {
	let listFilms = [], filmDetail = null, similarFilms = [];
	switch (action.type.toUpperCase()) {
		case DATA_ADD:
			return {
				...state,
				...action.payload
			};
		case LOAD_DATA_FILMS:
			listFilms = require('../demoListFilms');
			return {
				...state,
				listFilms: listFilms
			};
		case LOAD_DATA_FILMS_BY_ALIAS:
			listFilms = require('../demoListFilms');

			listFilms.map((film) => {
				if (!filmDetail) {
					if (action.payload === film.alias) {
						filmDetail = film;
					}
				}
			});

			return {
				...state,
				filmDetail: filmDetail
			};

		case LOAD_DATA_SIMILAR_FILMS_BY_GENRE:
			listFilms = require('../demoListFilms');
			listFilms.map((film) => {
				if (action.payload === film.genre) {
					similarFilms.push(film);
				}
			});
			return {
				...state,
				similarFilms: similarFilms
			};
		default:
			return state;
	}

}


export const mapStateToProps = state => ({
	state: state,
});


export const mapStateToDispatchers = dispatch => ({
	load: (data = {}) => {
		dispatch({type: DATA_ADD, payload: data});
	},
	loadListFilms: () => {
		dispatch({type: LOAD_DATA_FILMS});
	},
	loadListFilmByAlias: (alias = '') => {
		dispatch({type: LOAD_DATA_FILMS_BY_ALIAS, payload: alias});
	},
	loadSimilarFilmsByGenre: (genre = '') => {
		dispatch({type: LOAD_DATA_SIMILAR_FILMS_BY_GENRE, payload: genre});
	},

});
