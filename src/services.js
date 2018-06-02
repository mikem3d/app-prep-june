const api_key = 'a26b39d3d5d9f7f9c7b1f0f9c67d6830';
const base_url = 'https://api.themoviedb.org/3';

export default {
  imageUrl: 'https://image.tmdb.org/t/p/',

  apiCall(endpoint, method = 'GET', payload= '') {
    const url = `${base_url}/${endpoint}?api_key=${api_key}${payload}`;

    console.log(url);

    return fetch(url, {method})
      .then(response => response.json())
      .catch(e => console.log(e));
  },

  getUpcomingMovies () {
    return this.apiCall('movie/upcoming');
  },

  getNowPlaying () {
    return this.apiCall('movie/now_playing');
  },

  getPopularMovies () {
    return this.apiCall('movie/popular');
  }
}