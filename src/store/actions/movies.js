import actions from './actionTypes';

export const fetchMovies = keyword => ({
  type: actions.FETCH_MOVIES,
  keyword,
});

export const getMovie = id => ({
  type: actions.GET_MOVIE,
  id,
});
