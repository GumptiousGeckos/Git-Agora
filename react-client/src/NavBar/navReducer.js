const initialState = {
  activeTab: '',
  authorized: false,
  fetchingUserStatus: false,
  error: null
};

const navBar = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TAB':
      return {
        ...state,
        activeTab: action.payload
      };
    case 'FETCHING_USER_STATUS':
      return {
        ...state,
        fetchingUserStatus: true
      };
    case 'RECEIVED_USER_STATUS':
      return {
        ...state,
        authorized: action.payload.auth,
        user: action.payload.user,
        fetchingUserStatus: false
      };
    case 'REQUEST_USER_STATUS_ERROR':
      return {
        ...state,
        error: action.payload,
        fetchingUserStatus: false
      };
    default: {
      return state;
    }
  }
};

export default navBar;
