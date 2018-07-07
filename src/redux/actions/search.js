import {updateActivity} from './activity';
import Services from '../../services';

export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';
export const FETCH_RESULTS = 'FETCH_RESULTS';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export const updateSearchResults = results => {
  return {type: UPDATE_SEARCH_RESULTS, results};
}

export const updateSearchQuery = query => {
  return {type: UPDATE_SEARCH_QUERY, query};
}

export const selectMovie = movie => ({type: SELECT_MOVIE, movie});

export const fetchSearchResults = query => {
  return dispatch => {
    dispatch(updateActivity(true));
    Services.getSearchResults(query).then(response => {
      // call activity action set to false
      dispatch(updateActivity(false));
      dispatch(updateSearchResults(response.results))
    });
  }
}