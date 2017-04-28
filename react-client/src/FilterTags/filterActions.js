import axios from 'axios';

export const updateSearchText = text => ({
  type: 'UPDATE_SEARCH_TEXT',
  payload: text
});

export const requestProjectsByTag = () => ({
  type: 'FETCHING_PROJECTS_BY_TAG'
});

export const receivedProjectsByTag = projects => ({
  type: 'RECEIVED_PROJECTS_BY_TAG',
  payload: projects
});

export const errorProjectsByTag = err => ({
  type: 'REQUEST_PROJECTS_BY_TAG_ERROR',
  error: err
});


export const getProjectsByTag = tag => (
  (dispatch) => {
    dispatch(requestProjectsByTag());
    axios.get('api/projectsTags/', {
      params: {
        tag_name: tag
      }
    })
    .then((response) => {
      dispatch(receivedProjectsByTag(response.data));
    })
    .catch((err) => {
      dispatch(errorProjectsByTag(err));
    });
  }
);
