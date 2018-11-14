import _ from 'lodash';

export const LOAD_FILM_LIST = 'LOAD_FILM_LIST';
export const LOAD_FILM_DETAIL_BY_ID = 'LOAD_FILM_DETAIL_BY_ID';
export const LOAD_FILM_SIMILAR = 'LOAD_FILM_SIMILAR';

export const DO_SEARCH_QUERY = 'DO_SEARCH_QUERY';
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

const stateDefault = {
  listFilms: [],
  filmDetail: {},
  searchQuery: null,
  searchBy: 'title',
  sortBy: 'date',
  searchResults: [],
};

function compareFilmRating(filmA, filmB) {
  return filmA.rating - filmB.rating;
}

function compareFilmTitle(filmA, filmB) {
  if (filmA.title < filmB.title) {
    return -1;
  }
  if (filmA.title > filmB.title) {
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
  const resultListSearch = [];

  listFilms
    .filter(film => film.title.toLowerCase()
      .indexOf(searchQuery) > -1)
    .map(film => resultListSearch.push(film));

  return resultListSearch;
}

function filterByGenre(listFilms = [], searchQuery) {
  const resultListSearch = [];
  listFilms
    .filter(film => film.genre.toLowerCase()
      .indexOf(searchQuery) > -1)
    .map(film => resultListSearch.push(film));

  return resultListSearch;
}

function filterById(listFilms = [], filmId) {
  let resultListSearch = {};
  listFilms
    .filter(film => film.id.toLowerCase()
      .indexOf(filmId) > -1)
    .map(film => resultListSearch = film);

  return resultListSearch;
}

function sortSearchResults(listFilms = [], sortBy = 'date') {
  if (!listFilms) {
    return listFilms;
  }

  switch (sortBy) {
    case 'rating':
      listFilms.sort(compareFilmRating);
      break;
    case 'date':
      listFilms.sort(compareFilmDate);
      break;
    case 'title':
      listFilms.sort(compareFilmTitle);
      break;
    default:
      listFilms.sort(compareFilmRating);
      break;
  }
  return listFilms;
}

function searchFilm(state) {
  const filmList = loadFilms();
  let searchResults = [];

  if (!state.searchQuery) {
    return {
      ...state,
    };
  }

  switch (state.searchBy.toLowerCase()) {
    case 'genre':
      searchResults = filterByGenre(filmList, state.searchQuery);
      break;
    case 'title':
      searchResults = filterByTitle(filmList, state.searchQuery);
      break;
    default:
      searchResults = filterByTitle(filmList, state.searchQuery);
      break;
  }
  return {
    ...state,
    searchResults: sortSearchResults(searchResults, state.sortBy),
  };
}

function ReducerFilms(state = stateDefault, action) {
  switch (action.type) {
    // LOAD
    case LOAD_FILM_LIST:
      return {
        ...state,
        filmList: loadFilms(),
      };

    case LOAD_FILM_DETAIL_BY_ID:
      return {
        ...state,
        filmDetail: filterById(loadFilms(), action.payload),
      };
    case LOAD_FILM_SIMILAR:
      let similarFilms = [];
      const genre = _.get(state, 'filmDetail.genre');
      if (genre) {
        similarFilms = filterByGenre(loadFilms(), state.filmDetail.genre.toLowerCase());
      }

      return {
        ...state,
        similarFilms,
      };

      // DO
    case DO_SEARCH_QUERY:
      return searchFilm(state);

      // SET
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload.toString()
          .toLowerCase(),
      };

    case SET_FILM_CURRENT_ID:
      return {
        ...state,
        filmId: action.payload,
      };

    case SET_SEARCH_FILTER_BY:
      return searchFilm({
        ...state,
        searchBy: action.payload,
      });

    case SET_SEARCH_SORT_BY:
      return searchFilm({
        ...state,
        sortBy: action.payload,
      });

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
