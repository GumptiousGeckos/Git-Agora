import axios from 'axios';
import { hashHistory } from 'react-router-dom';

export const backToRepos = () => {
  return {
    type: 'BACK_TO_REPO'
  };
};

export const projectDescription = (description) => {
  return {
    type: 'DESCRIPTION_INPUT',
    text: description
  };
};

const startingSubmit = () => {
  return {
    type: 'SUBMITTING_PROJECT'
  };
};

const projectSubmitted = () => {
  return {
    type: 'PROJECT_SUBMITTED'
  };
};

const submitError = (error) => {
  return {
    type: 'SUBMIT_ERROR',
    error
  };
};

export const submitProject = (name, projectId, description, link, api, tags) => {
  return (dispatch) => {
    dispatch(startingSubmit());
    axios.post('api/projects', {
      name,
      projectId,
      description,
      link,
      api
    })
    .then(() => (
      axios.put('api/projectsTags', {
        projectId,
        tags
      })
    ))
    .then((msg) => {
      dispatch(projectSubmitted());
      window.location = msg.data.redirect;
    })
    .catch((error) => {
      dispatch(submitError(error));
      window.location = error.response.data.redirect;
    });
  };
};
