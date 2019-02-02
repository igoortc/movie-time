import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '81ef48ba6b89f0e48a64d281f100c61e';

const fetchMovies = keyword => {
  return axios({
    method: 'get',
    url: `${API_URL}search/movie?api_key=${API_KEY}&query=${keyword}`,
  });
};

const likeMovie = id => {
  return axios({
    method: 'get',
    url: `${API_URL}?api_key=${API_KEY}&query=${id}`,
  });
};

export default {
  fetchMovies: fetchMovies,
  likeMovie: likeMovie,
};
