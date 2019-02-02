import React from 'react';
import PropTypes from 'prop-types';
import { MoviesList, Poster } from './styled';

export const List = ({ movies }) => {
  const moviesList = movies
    .slice(0, 8)
    .map(movie => (
      <Poster key={movie.id} alt={movie.title} src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
    ));
  return <MoviesList>{moviesList}</MoviesList>;
};

List.propTypes = {
  movies: PropTypes.instanceOf(Object),
};

List.defaultProps = {
  movies: {},
};

export default List;
