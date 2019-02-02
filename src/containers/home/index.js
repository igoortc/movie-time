import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from '../../store/actions/movies';
import List from '../../components/list';
import { Search, Input, SearchButton, Error } from './styled';

export class Home extends Component {
  state = {
    keyword: ''
  }

  handleChange = (event) => {
    this.props.fetchMovies(event.target.value)
    this.setState({ keyword: event.target.value });
  }

  render() {
    const { fetchMovies, movies } = this.props;
    const error = <Error>We couldn't find any matches <span role="img" aria-label="Crying">😭</span></Error>

    return (
      <Search>
          <Input
            type="text"
            name="keyword"
            placeholder="search for a movie"
            value={this.state.keyword}
            onChange={this.handleChange} 
          />
          <SearchButton type="submit" onClick={() => fetchMovies(this.state.keyword)}>
            Go!
          </SearchButton>
        {movies.error ? error : movies.loaded && <List movies={movies.movies} />}
      </Search>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchMovies: keyword => dispatch(fetchMovies(keyword)),
});

Home.propTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.instanceOf(Object),
};

Home.defaultProps = {
  fetchMovies: undefined,
  movies: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
