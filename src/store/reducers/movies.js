import actions from '../actions/actionTypes';

let initialState = {
  movies: [],
  loaded: false,
  error: false,
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
    default:
      return state;
  }
};
