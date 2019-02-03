import { FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAIL, GET_MOVIE_SUCCESS, GET_MOVIE_FAIL } from '../actions/actionTypes';

const initialState = {
  movies: [],
  loaded: false,
  error: false,
  movie: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loaded: true,
        movies: action.movies,
        error: false,
      };
    case FETCH_MOVIES_FAIL:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...state,
        loaded: true,
        movie: action.movies,
        error: false,
      };
    case GET_MOVIE_FAIL:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    default:
      return state;
  }
};
