import { FETCH_MOVIES_FAIL, GET_MOVIE_FAIL } from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES_FAIL:
      return { message: action.message };
    case GET_MOVIE_FAIL:
      return { message: action.message };
    default:
      return state;
  }
};
