import { combineReducers } from 'redux';
import repoListReducer from './RepoList/repoListReducer';
import projectSubmissionReducer from './ProjectSubmission/projectSubmissionReducer';

const initialState = {
  list: [],
  selected: {},
  isFetchingRepos: false,
  error: null,
  description: '',
  page: 'SELECT_REPO'
}

const createProjectReducer = (state = initialState, action) => {
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
    case 'CONFIRM_REPO':
      return {
        ...state,
        page: 'SUBMISSION_PAGE'
      };
    case 'BACK_TO_REPO':
      return {
        ...state,
        description: '',
        page: 'SELECT_REPO'
      }
    default:
      return state;
  }
}

export default createProjectReducer;
