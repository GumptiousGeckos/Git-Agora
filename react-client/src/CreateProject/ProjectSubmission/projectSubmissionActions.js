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
  }
}

export const submitProject = (projectName, description, webhook) => {
  return dispatch => {
    dispatch(startingSubmit());
    axios.put('api/projects', {
      projectname,
      description,
      webhook
    }) // Insert right link here
  }
}