import {
  SET_SEARCH_SORT_BY,
  SET_SEARCH_QUERY,
  DO_SEARCH_QUERY,
  SET_SEARCH_FILTER_BY,
  START_SEARCH_QUERY, FINISH_SEARCH_QUERY,
} from '../../reducers/ReducerFilms';

export default function SearchBarDispatch(dispatch) {
  return {
    onSetSearchQuery: (searchQuery) => {
      dispatch({ type: SET_SEARCH_QUERY, payload: searchQuery });
    },

    onSearchFilm: () => {
      const async = () => {
        dispatch({ type: START_SEARCH_QUERY });
        return dispatch => setTimeout(() => {
          dispatch({ type: DO_SEARCH_QUERY });
          dispatch({ type: FINISH_SEARCH_QUERY });
        }, 1000);
      };

      dispatch(async());
    },

    onSetSearchBy: (searchBy = 'title') => () => {
      const async = () => {
        dispatch({ type: START_SEARCH_QUERY });
        return dispatch => setTimeout(() => {
          dispatch({ type: SET_SEARCH_FILTER_BY, payload: searchBy });
          dispatch({ type: FINISH_SEARCH_QUERY });
        }, 5000);
      };

      dispatch(async());
    },
    onSetSortBy: (sortBy = 'date') => () => {
      const async = () => {
        dispatch({ type: START_SEARCH_QUERY });
        return dispatch => setTimeout(() => {
          dispatch({ type: SET_SEARCH_SORT_BY, payload: sortBy });
          dispatch({ type: FINISH_SEARCH_QUERY });
        }, 5000);
      };

      dispatch(async());
    },
  };
}
