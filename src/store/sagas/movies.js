import { put } from 'redux-saga/effects';
import actions from '../actions/actionTypes';
import api from '../../utils/api';

export function* fetchMoviesSaga(action) {
  try {
    const response = yield api.fetchMovies(action.keyword);
    const movies = yield response.data.results;
    movies.length > 0
      ? yield put({ type: actions.FETCH_MOVIES_SUCCESS, movies: movies })
      : yield put({ type: actions.FETCH_MOVIES_FAIL });
  } catch (error) {
    yield put({ type: actions.FETCH_MOVIES_FAIL, message: error.message });
  }
}

export function* getMovieSaga(action) {
  try {
    const response = yield api.getMovie(action.id);
    const movies = yield response.data;
    yield put({ type: actions.GET_MOVIE_SUCCESS, movies: movies });
  } catch (error) {
    yield put({ type: actions.GET_MOVIE_FAIL, message: error.message });
  }
}
