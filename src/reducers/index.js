import {combineReducers} from "redux";
import ReducerFilms from "./ReducerFilms";


export function mapStateToProps(state) {
	return {
		store: state
	}
}

export default combineReducers({ReducerFilms});

