import { takeEvery } from 'redux-saga/effects';
import { fetchMoviesSaga, likeMovieSaga, getMovieSaga } from './movies';
import actions from '../actions/actionTypes';

export function* watchMovies() {
  yield takeEvery(actions.FETCH_MOVIES, fetchMoviesSaga);
  yield takeEvery(actions.GET_MOVIE, getMovieSaga);
}
