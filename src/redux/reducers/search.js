import * as Actions from '../actions/search';

const initialState = {
  searchResults: [],
  selectedMovie: null,
  query: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_SEARCH_RESULTS: 
      return {
        ...state,
        searchResults: action.results
      };
    case Actions.UPDATE_SEARCH_QUERY: 
      return {
        ...state,
        query: action.query,
        searchResults: action.query.length === 0 ? [] : state.searchResults
      }
    case Actions.SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: action.movie
      }
    default: 
      return state;
  }
}