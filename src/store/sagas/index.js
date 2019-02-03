import { takeEvery } from 'redux-saga/effects';
import { fetchMoviesSaga, getMovieSaga } from './movies';
import { FETCH_MOVIES, GET_MOVIE } from '../actions/actionTypes';

export default function* watchMovies() {
  yield takeEvery(FETCH_MOVIES, fetchMoviesSaga);
  yield takeEvery(GET_MOVIE, getMovieSaga);
}
