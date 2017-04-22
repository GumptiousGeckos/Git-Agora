import axios from 'axios';

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

export const requestUser = () => ({
  type: 'FETCHING_USER'
});

export const receivedUser = projects => ({
  type: 'RECEIVED_USER',
  payload: projects
});

export const errorUser = err => ({
  type: 'REQUEST_USER_ERROR',
  error: err
});

export const getUserById = id => (
  (dispatch) => {
    dispatch(requestUser());
    axios.get('api/users/' + id)
      .then((response) => {
        dispatch(receivedUser(response.data[0]));
      })
      .catch((err) => {
        dispatch(errorUser(err));
      });
  }
);
