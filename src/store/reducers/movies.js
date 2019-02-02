import actions from '../actions/actionTypes';

const initialState = {
  movies: [],
  loaded: false,
  error: false,
  movie: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loaded: true,
        movies: action.movies,
        error: false,
      };
    case actions.FETCH_MOVIES_FAIL:
      return {
        ...state,
        loaded: false,
        error: true,
      };
    case actions.GET_MOVIE_SUCCESS:
      return {
        ...state,
        loaded: true,
        movie: action.movies,
        error: false,
      };
    default:
      return state;
  }
};
