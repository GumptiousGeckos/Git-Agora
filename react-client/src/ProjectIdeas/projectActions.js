import axios from 'axios';

export const requestProjects = () => ({
  type: 'FETCHING_PROJECTS'
});

export const receivedProjects = projects => ({
  type: 'RECEIVED_PROJECTS',
  payload: projects
});

export const errorProjects = err => ({
  type: 'REQUEST_PROJECTS_ERROR',
  error: err
});

export const fetchProjects = () => (
  (dispatch) => {
    dispatch(requestProjects());
    axios.get('/api/projects')
      .then((response) => {
        dispatch(receivedProjects(response.data));
      })
      .catch((err) => {
        dispatch(errorProjects(err));
      });
  }
);
