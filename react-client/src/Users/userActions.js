import axios from 'axios';

const userProjectDummyData = [
  {
    id: 0,
    title: 'Project Title',
    description: 'Project Description!',
    likes: 5,
    dislikes: 1
  },
  {
    id: 1,
    title: 'Project Title2',
    description: 'Project Description2!',
    likes: 2,
    dislikes: 2
  },
  {
    id: 2,
    title: 'Project Title3',
    description: 'Project Description3!',
    likes: 0,
    dislikes: 2
  }
];

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
    axios.get('/api/projects/' + id)
    .then((response) => {
      dispatch(receivedUserProjects(response.data));
    })
    .catch((err) => {
      dispatch(errorUserProjects(err));
    });
  }
);
