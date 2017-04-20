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
