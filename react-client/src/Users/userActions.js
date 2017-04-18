import axios from 'axios';

export const requestUserProjects = () => ({
  type: 'FETCHING_USER_PROJECTS'
});

export const receivedUserProjects = projects => ({
  type: 'RECEIVED_USER_PROJECTS',
  payload: projects
});

export const errorUserProjects = err => ({
  type: 'REQUEST_USER_PROJECTS_ERROR',
  error: err
});

export const fetchUserProjects = id => (
  (dispatch) => {
    dispatch(requestUserProjects());
    axios.get('/api/projects/users/' + id)
    .then((response) => {
      dispatch(receivedUserProjects(response.data));
    })
    .catch((err) => {
      dispatch(errorUserProjects(err));
    });
  }
);
