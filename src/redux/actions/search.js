export const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';
export const UPDATE_SEARCH_QUERY = 'UPDATE_SEARCH_QUERY';

export const updateSearchResults = results => {
  return {type: UPDATE_SEARCH_RESULTS, results};
}

export const updateSearchQuery = query => {
  return {type: UPDATE_SEARCH_QUERY, query};
}