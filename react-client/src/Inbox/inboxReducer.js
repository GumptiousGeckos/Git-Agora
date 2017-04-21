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
            ...state.selectedMessage.messages,
            action.message
          ]
        },
        messageText: ''
      };
    case 'INPUT_TEXT':
      return {
        ...state,
        messageText: action.text
      };
    default:
      return state;
  }
};

export default inboxReducer;
