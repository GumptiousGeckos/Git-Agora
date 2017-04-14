import axios from 'axios';

const projectDummyData = [
  {
    id: 0,
    title: 'Project Title',
    description: 'Project Description!',
    likes: 5,
    dislikes: 1,
    collaborators: [{ name: 'Jon' }]
  },
  {
    id: 1,
    title: 'Project Title2',
    description: 'Project Description2!',
    likes: 2,
    dislikes: 2,
    collaborators: [{ name: 'Jon' }, { name: 'Paul' }]
  },
  {
    id: 2,
    title: 'Project Title3',
    description: 'Project Description3!',
    likes: 0,
    dislikes: 2,
    collaborators: [{ name: 'Jon' }, { name: 'Paul' }, { name: 'Ed' }, { name: 'Gus' }]
  }
];

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
    // setTimeout(() => {
    //   dispatch(receivedProjects(projectDummyData));
    // }, 1000);
  }
);
