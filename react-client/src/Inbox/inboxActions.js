import axios from 'axios';

const fetchingInbox = () => (
  {
    type: 'FETCHING_INBOX'
  }
);

const receiveInbox = messages => (
  {
    type: 'RECEIVED_INBOX',
    messages
  }
);

const errorInbox = error => (
  {
    type: 'ERROR_INBOX',
    error
  }
);

export const fetchInbox = () => (
  (dispatch) => {
    dispatch(fetchingInbox());
    axios.get('/api/messages')
    .then((results) => {
      dispatch(receiveInbox(results.data));
    })
    .catch((error) => {
      dispatch(errorInbox(error));
    });
  }
);

export const selectMessage = message => (
  {
    type: 'SELECT_MESSAGE',
    message
  }
);

export const sendMessage = message => (
  {
    type: 'SEND_MESSAGE',
    message
  }
);
