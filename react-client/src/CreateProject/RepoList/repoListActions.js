import axios from 'axios';


export const fetchRepo = () => {
  return {
    type: 'FETCH_REPO'
  };
};

export const fetchSuccess = (list = []) => {
  return {
    type: 'FETCH_REPO_SUCCESS',
    repos: list
  };
};

export const fetchError = (error) => {
  return {
    type: 'FETCH_REPO_ERROR',
    error: error
  };
};

export const fetchRepoList = () => {
  return (dispatch) => {
    dispatch(fetchRepo());
    axios.get('/github/user/repos')
    .then((results) => {
      dispatch(fetchSuccess(results.data));
    })
    .catch((error) => {
      dispatch(fetchError(error));
    });
  };
};

export const selectRepo = (repo) => {
  return {
    type: 'SELECT_REPO',
    repo: repo
  }
};

export const moveToSubmission = () => {
  return {
    type: 'MOVE_TO_SUBMISSION'
  }
}