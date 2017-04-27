const initialState = {
  list: [],
  selectedRepo: {},
  fetchingRepos: false,
  error: null,
  name: '',
  description: '',
  page: 'SELECT_REPO',
  submittingProject: false
};

const createProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REPO':
      return {
        ...state,
        fetchingRepos: true
      };
    case 'FETCH_REPO_ERROR':
      return {
        ...state,
        fetchingRepos: false,
        error: action.error
      };
    case 'FETCH_REPO_SUCCESS':
      return {
        ...state,
        fetchingRepos: false,
        list: [...action.repos]
      };
    case 'SELECT_REPO':
      return {
        ...state,
        name: action.repo.name,
        selectedRepo: action.repo
      };
    case 'MOVE_TO_SUBMISSION':
      return {
        ...state,
        page: 'SUBMISSION_PAGE'
      };
    case 'BACK_TO_REPO':
      return {
        ...state,
        description: '',
        page: 'SELECT_REPO'
      };
    case 'DESCRIPTION_INPUT':
      return {
        ...state,
        description: action.text
      };
    case 'SUBMITTING_PROJECT':
      return {
        ...state,
        page: 'SUBMITTING_PROJECT',
        submittingProject: true
      };
    case 'SUBMIT_ERROR':
      return {
        ...initialState,
        error: action.error
      };
    case 'PROJECT_SUBMITTED':
      return initialState;
    default:
      return state;
  }
};

export default createProjectReducer;
