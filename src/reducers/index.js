import {combineReducers} from "redux";
import ReducerFilms from "./ReducerFilms";
import {routerReducer} from "react-router-redux";
import {createBrowserHistory as createHistory} from 'history';

export function mapStateToProps(state) {
	return {
		store: state
	}
}

export default combineReducers({
	routing: routerReducer(createHistory),
	ReducerFilms
});

