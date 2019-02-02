import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import moviesReducer from './reducers/movies';
import errorsReducer from './reducers/errors';
import { watchMovies } from './sagas/index';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(
    combineReducers({
      movies: moviesReducer,
      error: errorsReducer,
    }),
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watchMovies);
  return store;
};
