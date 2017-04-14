const initialState = {
  isFetchingRepos: false,
  error: null,
  RepoList: []
}

const repoListsReducer = (state = initialState, action) => {
  switch(action.type) {
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
        RepoList: [ ...action.repos ]
      }
    default: 
      return state
  }
}

export default repoListsReducer;