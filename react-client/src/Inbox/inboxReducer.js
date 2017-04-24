const initialState = {
  messages: [],
  selectedMessage: {},
  fetchingInbox: false,
  messageError: null,
  messageText: ''
};

const inboxReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_INBOX':
      return {
        ...state,
        fetchingInbox: true
      };
    case 'RECEIVED_INBOX':
      return {
        ...state,
        fetchingInbox: false,
        messages: action.messages
      };
    case 'ERROR_INBOX':
      return {
        ...state,
        fetchingInbox: false,
        messageError: action.error
      };
    case 'SELECT_MESSAGE':
      return {
        ...state,
        selectedMessage: action.message
      };
    case 'MESSAGE_ERROR':
      return {
        ...state,
        messageError: action.error
      };
    case 'MESSAGE_SENT':
      return {
        ...state,
        selectedMessage: {
          ...state.selectedMessage,
          messages: [
            action.message,
            ...state.selectedMessage.messages
          ]
        },
        messageText: ''
      };
    case 'INPUT_TEXT':
      return {
        ...state,
        messageText: action.text
      };
    case 'MESSAGE_DELETED':
      return {
        ...state,
        messages: state.messages.filter(message => message._id !== action.id),
        selectedMessage: {}
      };
    case 'MESSAGE_DELETE_ERROR':
      return {
        ...state,
        messageError: action.error
      };
    default:
      return state;
  }
};

export default inboxReducer;
