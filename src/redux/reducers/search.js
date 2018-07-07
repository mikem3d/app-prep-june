import * as Actions from '../actions/search';

const initialState = {
  searchResults: [],
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
        query: action.query
      }
    default: 
      return state;
  }
}