import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { MoviesList, Poster } from './styled';

export const List = ({ movies, history }) => {
  console.log('MOVIES', movies);
  const moviesList =
    movies &&
    movies.slice(0, 8).map(movie => (
      <Poster
        key={movie.id}
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        onClick={() => {
          history.push(`/movie/${movie.id}`);
        }}
      />
    ));
  return <MoviesList>{moviesList}</MoviesList>;
};

List.propTypes = {
  movies: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object).isRequired,
};

List.defaultProps = {
  movies: {},
};

export default withRouter(List);
