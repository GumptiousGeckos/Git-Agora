const initialState = {
  isFetchingRepos: false,
  error: null,
  list: [],
  selectedRepo: {}
};

const repoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REPO':
      return {
        ...state,
        isFetchingRepos: true
      };
    case 'FETCH_REPO_ERROR':
      return {
        ...state,
        isFetchingRepos: false,
        error: action.error
      };
    case 'FETCH_REPO_SUCCESS':
      return {
        ...state,
        isFetchingRepos: false,
        list: [...action.repos]
      };
    case 'SELECT_REPO':
      return {
        ...state,
        selectedRepo: action.repo
      };
    default:
      return state;
  }
};

export default repoListReducer;
