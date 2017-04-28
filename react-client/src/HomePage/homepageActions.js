import axios from 'axios';

export const requestHotProjects = () => ({
  type: 'FETCHING_HOT_PROJECTS'
});

export const receivedHotProjects = projects => ({
  type: 'RECEIVED_HOT_PROJECTS',
  payload: projects
});

export const errorHotProjects = err => ({
  type: 'REQUEST_HOT_PROJECTS_ERROR',
  error: err
});

export const requestHotNews = () => ({
  type: 'FETCHING_HOT_NEWS'
});

export const receivedHotNews = projects => ({
  type: 'RECEIVED_HOT_NEWS',
  payload: projects
});

export const errorHotNews = err => ({
  type: 'REQUEST_HOT_NEWS_ERROR',
  error: err
});

export const fetchHotProjects = () => (
  (dispatch) => {
    dispatch(requestHotProjects());
    axios.get('/api/projects')
      .then((response) => {
        dispatch(receivedHotProjects(response.data));
      })
      .catch((err) => {
        dispatch(errorHotProjects(err));
      });
  }
);

export const fetchHotNews = () => (
  (dispatch) => {
    dispatch(requestHotNews());
    axios.get('/api/topSixArticles')
      .then((response) => {
        dispatch(receivedHotNews(response.data));
      })
      .catch((err) => {
        dispatch(errorHotNews(err));
      });
  }
);
