import { FETCH_MOVIES, GET_MOVIE } from './actionTypes';

export const fetchMovies = keyword => ({
  type: FETCH_MOVIES,
  keyword,
});

export const getMovie = id => ({
  type: GET_MOVIE,
  id,
});
