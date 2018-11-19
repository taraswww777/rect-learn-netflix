import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createBrowserHistory as createHistory } from 'history';
import ReducerFilms from './ReducerFilms';

export default combineReducers({
  routing: routerReducer(createHistory),
  ReducerFilms,
});
