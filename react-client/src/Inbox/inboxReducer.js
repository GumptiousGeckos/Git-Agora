const initialState = {
  messages: [],
  selectedMessage: {},
  fetchingInbox: false,
  messageError: false
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
    default:
      return state;
  }
};

export default inboxReducer;
