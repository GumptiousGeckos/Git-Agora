import { combineReducers } from 'redux';
import repoListReducer from './RepoList/repoListReducer';
import projectSubmissionReducer from './ProjectSubmission/projectSubmissionReducer';

const createProjectReducer = combineReducers({
  repolist: repoListReducer,
  submission: projectSubmissionReducer
});

export default createProjectReducer;
