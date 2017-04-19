const initialState = {
  messages: [],
  selectedMessage: {},
  fetchingInbox: false,
  messageError: null
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
    default:
      return state;
  }
};

export default inboxReducer;
