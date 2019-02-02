import actions from './actionTypes';

export const fetchMovies = keyword => ({
  type: actions.FETCH_MOVIES,
  keyword,
});

export const getMovie = id => ({
  type: actions.GET_MOVIE,
  id,
});

export const likeMovie = id => ({
  type: actions.LIKE_MOVIE,
  id,
});
