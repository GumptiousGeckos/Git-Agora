import axios from 'axios';

export const backToRepos = () => {
  return {
    type: 'BACK_TO_REPO'
  }
}

export const projectDescription = (description) => {
  return {
    type: 'DESCRIPTION_INPUT',
    text: description
  }
}

const startingSubmit = () => {
  return {
    type: 'SUBMITTING_PROJECT'
  };
}

const projectSubmitted = () => {
  return {
    type: 'PROJECT_SUBMITTED'
  };
}

const submitError = (error) => {
  return {
    type: 'SUBMIT_ERROR',
    error: error
  }
}

export const submitProject = (name, projectId, description, link, webhook) => {
  return (dispatch) => {
    dispatch(startingSubmit());
    axios.post('api/projects', {
      name,
      projectId,
      description,
      link,
      webhook
    })
    .then((results) => {
      console.log(results);
      dispatch(projectSubmitted());
    })
    .catch((error) => {
      console.log(error);
      dispatch(submitError(error));
    })
  }
}
