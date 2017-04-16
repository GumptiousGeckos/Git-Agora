import axios from 'axios';

export const changeTab = tab => ({
  type: 'CHANGE_TAB',
  payload: tab
});

export const requestUserStatus = () => ({
  type: 'FETCHING_USER_STATUS'
});

export const receivedUserStatus = userInfo => ({
  type: 'RECEIVED_USER_STATUS',
  payload: userInfo
});

export const errorUserStatus = err => ({
  type: 'REQUEST_USER_STATUS_ERROR',
  error: err
});

export const updateUser = user => ({
  type: 'UPDATE_USER',
  payload: user
});

export const checkUserLoggedIn = () => (
  (dispatch) => {
    dispatch(requestUserStatus());
    axios.get('/auth/user')
      .then((response) => {
        dispatch(receivedUserStatus(response.data));
      })
      .catch((err) => {
        dispatch(errorUserStatus(err));
      });
  }
);
