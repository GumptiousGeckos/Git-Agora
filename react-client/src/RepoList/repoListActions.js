import axios from 'axios';


const fetchRepo = () => {
  return {
    type: 'FETCH_REPO'
  };
};

const fetchSuccess = (list) => {
  return {
    type: 'FETCH_REPO_SUCCESS',
    repos: list
  };
};

const fetchError = (error) => {
  return {
    type: 'FETCH_REPO_ERROR',
    error: error
  };
};

export const fetchRepoList = () => {
  return (dispatch) => {
    dispatch(fetchRepo());
    axios.get('/github/user/repos')
    .then(results => {
      console.log(results.data);
      dispatch(fetchSuccess(results.data));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchError(error));
    })
  };
};