import axios from 'axios';

export const addProject = () => ({
  type: 'ADD_PROJECT'
});

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

export const updateMainProject = project => ({
  type: 'UPDATE_MAIN_PROJECT',
  payload: project
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
