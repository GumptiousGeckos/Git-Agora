import axios from 'axios';

const projectDummyData = [
  {
    id: 0,
    title: "Project Title",
    description: "Project Description!",
    likes: 5,
    dislikes: 1
  },
  {
    id: 1,
    title: "Project Title2",
    description: "Project Description2!",
    likes: 2,
    dislikes: 2
  },
  {
    id: 2,
    title: "Project Title3",
    description: "Project Description3!",
    likes: 0,
    dislikes: 2
  }
];

export const addProject = () => {
  return {
    type: "ADD_PROJECT",
  };
};

export const requestProjects = () => {
  return {
    type: "FETCHING_PROJECTS",
  };
};

export const receivedProjects = (projects) => {
  return {
    type: 'RECEIVED_PROJECTS',
    payload: projects
  };
};

export const errorProjects = (err) => {
  return {
    type: 'REQUEST_PROJECTS_ERROR',
    error: err
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    dispatch(requestProjects());
    // axios.get('http://localhost:3000/api/projects/?')
    //   .then((response) => {
    //     dispatch(receivedProjects(response.data));
    //   })
    //   .catch((err) => {
    //     dispatch(errorProjects());
    //   });
    setTimeout(() => {
      dispatch(receivedProjects(projectDummyData));
    }, 1000);
  };
};