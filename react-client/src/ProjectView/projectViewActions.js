import axios from 'axios';

export const requestProject = () => ({
  type: 'FETCHING_PROJECT'
});

export const receivedProject = project => ({
  type: 'RECEIVED_PROJECT',
  payload: project
});

export const errorProject = err => ({
  type: 'REQUEST_PROJECT_ERROR',
  error: err
});

export const requestCollaborators = () => ({
  type: 'FETCHING_COLLABORATORS'
});

export const receivedCollaborators = collaborators => ({
  type: 'RECEIVED_COLLABORATORS',
  payload: collaborators
});

export const errorCollaborators = err => ({
  type: 'REQUEST_COLLABORATORS_ERROR',
  error: err
});

export const getProjectById = id => (
  (dispatch) => {
    dispatch(requestProject());
    axios.get('api/projects/' + id)
      .then((response) => {
        dispatch(receivedProject(response.data[0]));
      })
      .catch((err) => {
        dispatch(errorProject(err));
      });
  }
);

export const getCollaborators = id => (
  (dispatch) => {
    dispatch(requestCollaborators());
    axios.get('/api/collaborators', { params: { id } })
      .then((response) => {
        dispatch(receivedCollaborators(response.data));
      })
      .catch((err) => {
        dispatch(errorCollaborators(err));
      });
  }
);
