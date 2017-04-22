import axios from 'axios';

const sendingNewMessage = () => (
  {
    type: 'SENDING_NEW_MESSAGE'
  }
);
const newMessageSent = () => (
  {
    type: 'NEW_MESSAGE_SENT'
  }
);
const newMessageSentError = error => (
  {
    type: 'NEW_MESSAGE_ERROR',
    error
  }
);
export const sendNewMessage = (sender, receiver, header, text) => (
  (dispatch) => {
    dispatch(sendingNewMessage());
    axios.post('/api/messages', {
      type: 'new',
      message: {
        sender,
        receiver,
        text,
        timeSent: new Date().toString()
      }
    })
    .then(() => dispatch(newMessageSent()))
    .catch(error => dispatch(newMessageSentError(error)));
  }
);

export const headerInput = text => (
  {
    type: 'HEADER_INPUT',
    header: text
  }
);

export const bodyInput = text => (
  {
    type: 'BODY_INPUT',
    body: text
  }
);
