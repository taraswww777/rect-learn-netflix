export const LOAD_DATA_FILMS = 'LOAD_DATA_FILMS';
export const DATA_ADD = 'DATA_ADD';

function reducer(state = {}, action = {}) {

	switch (action.type.toUpperCase()) {
		case DATA_ADD:
			return{
				...state,
				...action.payload
			};
		case LOAD_DATA_FILMS:
			let listFilms = require('../demoListFilms');

			return {
				...state,
				listFilms: listFilms
			};
		default:
			return state;
	}

}

export default reducer;



export const mapStateToProps = state => ({
	state: state,
});


export const mapStateToDispatchers = dispatch => ({
	load: (data = {}) => {
		dispatch({type: DATA_ADD, payload: data});
	},
	loadListFilms: () => {
		dispatch({type: LOAD_DATA_FILMS});
	}
});
