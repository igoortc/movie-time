import actions from '../actions/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIES:
      return { message: actions.message };
    case actions.LIKE_MOVIE:
      return { message: actions.message };
    default:
      return state;
  }
};
