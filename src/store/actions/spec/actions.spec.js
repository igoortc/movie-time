import { fetchMovies, getMovie } from '../movies';

describe('Movie actions', () => {
  it('should dispatch FETCH_MOVIES action', () => {
    expect(fetchMovies()).toEqual({ type: 'FETCH_MOVIES' });
  });

  it('should dispatch GET_MOVIE action', () => {
    expect(getMovie()).toEqual({ type: 'GET_MOVIE' });
  });
});
