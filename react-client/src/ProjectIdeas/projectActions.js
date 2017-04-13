import axios from 'axios';

export function addProject() {
  return {
    type: "ADD_PROJECT",
  };
};

const requestProjects = () => {
  return {
    type: "FETCH_PROJECTS",
  };
};

const receivedProjects = (projects) => {
  return {
    type: 'RECEIVED_PROJECTS',
    payload: projects
  };
};

const errorProjects = (err) => {
  return {
    type: 'REQUEST_PROJECTS_ERROR',
    error: err
  };
};

export function fetchProjects() {
    return (dispatch) => {
      dispatch(requestProjects());
      axios.get('http://localhost:3000/api/?')
        .then((response) => {
          dispatch(receivedProjects(response.data));
        })
        .catch((err) => {
          dispatch(errorProjects());
        });
    }
};