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
    axios.get('api/projects/users/' + id)
    .then((response) => {
      dispatch(receivedUserProjects(response.data));
    })
    .catch((err) => {
      dispatch(errorUserProjects(err));
    });
  }
);

export const toggleEditMode = () => ({
  type: 'TOGGLE_EDIT_MODE'
});

export const updateDescriptionText = text => ({
  type: 'UPDATE_DESCRIPTION_TEXT',
  payload: text
});

export const savingChanges = () => ({
  type: 'SAVING_CHANGES'
});

export const savedChanges = () => ({
  type: 'SAVED_CHANGES'
});

export const errorSavingChanges = err => ({
  type: 'ERROR_SAVING_CHANGES',
  error: err
});

export const saveChanges = text => (
  (dispatch) => {
    dispatch(savingChanges());
    axios.put('api/users/', {
      description: text
    })
    .then(() => {
      dispatch(savedChanges());
    })
    .catch((err) => {
      dispatch(errorSavingChanges(err));
    });
  }
);
