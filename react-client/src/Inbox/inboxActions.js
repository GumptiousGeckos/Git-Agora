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
    axios.get('/api/messages', {
      params: {
        q: 'all'
      }
    })
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

const sendingMessage = () => (
  {
    type: 'SENDING_MESSAGE'
  }
);
const messageSent = message => (
  {
    type: 'MESSAGE_SENT',
    message
  }
);
const sendMessageError = error => (
  {
    type: 'MESSAGE_ERROR',
    error
  }
);

export const submitMessage = (sender, receiver, text, id) => {
  const messageInfo = {
    sender,
    receiver,
    text,
    timeSent: new Date().toString()
  };
  return (dispatch) => {
    dispatch(sendingMessage());
    axios.post('/api/messages', {
      id,
      message: messageInfo,
      type: 'reply'
    })
    .then(() => dispatch(messageSent(messageInfo)))
    .catch(error => dispatch(sendMessageError(error)));
  };
};

export const inputText = text => (
  {
    type: 'INPUT_TEXT',
    text
  }
);
