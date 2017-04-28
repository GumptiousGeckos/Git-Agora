const initialState = {
  header: '',
  body: '',
  receiver: '',
  sendingNewMessage: false,
  newMessageError: null
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SENDING_NEW_MESSAGE':
      return {
        ...state,
        sendingNewMessage: true
      };
    case 'NEW_MESSAGE_SENT':
      return initialState;
    case 'NEW_MESSAGE_ERROR':
      return {
        ...state,
        sendingNewMessage: false,
        newMessageError: action.error
      };
    case 'HEADER_INPUT':
      return {
        ...state,
        header: action.header
      };
    case 'BODY_INPUT':
      return {
        ...state,
        body: action.body
      };
    case 'RECEIVER_INPUT':
      return {
        ...state,
        receiver: action.receiver
      };
    default:
      return state;
  }
};

export default messageReducer;
