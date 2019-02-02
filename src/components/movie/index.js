import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { getMovie } from '../../store/actions/movies';
import { Poster, Loading, Info, Description, H1 } from './styled';

export class Movie extends Component {
  componentDidMount() {
    const {
      getMovie,
      match: {
        params: { id },
      },
    } = this.props;
    getMovie(id);
  }

  render() {
    const { movie, loaded } = this.props;
    const loading = (
      <Loading>
        The content is loading...&nbsp;
        <span role="img" aria-label="Person waiting">
          🙋‍♂️
        </span>
      </Loading>
    );
    const releaseDate = (
      <p>
        <span role="img" aria-label="Calendar">
          🗓
        </span>
        {' This movie opens on ' + new Date(movie.release_date).toDateString()}
      </p>
    );
    const grade = (
      <p>
        <span role="img" aria-label="Rating">
          ⭐️
        </span>
        {' ' + movie.vote_average}
      </p>
    );
    const imdb = (
      <p>
        <span role="img" aria-label="Rating">
          🌎
        </span>
        {' Go to '}
        <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer noopener">
          IMDb
        </a>
      </p>
    );
    const info = (
      <Info>
        <Helmet>
          <title>
            {movie.title}
            🎞
          </title>
        </Helmet>
        <Poster alt={movie.title} src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
        <Description>
          <H1>{movie.title}</H1>
          {movie.genres && movie.genres.map(genre => <em key={genre.name}>{genre.name + ' '}</em>)}
          <br />
          <br />
          {movie.status === 'Released' ? grade : releaseDate}
          {'"' + movie.overview + '"'}
          {imdb}
        </Description>
      </Info>
    );

    return loaded ? movie && info : loading;
  }
}

const mapStateToProps = state => {
  if (state.movies.loaded) {
    return {
      loaded: state.movies.loaded,
      movie: state.movies.movie,
    };
  }

  return {
    movie: state.movies.movie,
    loaded: state.movies.loaded,
  };
};

const mapDispatchToProps = dispatch => ({
  getMovie: id => dispatch(getMovie(id)),
});

Movie.propTypes = {
  getMovie: PropTypes.func,
  movie: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object).isRequired,
  loaded: PropTypes.bool.isRequired,
};

Movie.defaultProps = {
  getMovie: undefined,
  movie: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);
