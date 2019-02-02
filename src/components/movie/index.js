import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    const poster = <Poster alt={movie.title} src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />;
    const info = (
      <Info>
        <Poster alt={movie.title} src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} />
        <Description>
          <H1>{movie.title}</H1>
          {movie.genres && movie.genres.map(genre => <em key={genre.name}>{genre.name + ' '}</em>)}
        </Description>
      </Info>
    );

    return loaded ? movie && info : loading;
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  if (state.movies.loaded) {
    return {
      loaded: state.movies.loaded,
      movie: state.movies.movies,
    };
  }

  return {
    movie: state.movies.movies,
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
