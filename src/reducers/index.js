import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory as createHistory } from 'history';
import ReducerFilms from './ReducerFilms';

export function mapStateToProps(state) {
  return {
    store: state,
  };
}

export default combineReducers({
  routing: routerReducer(createHistory),
  ReducerFilms,
});
