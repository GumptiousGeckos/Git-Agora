const initialState = {
  fetchingUserProjects: false,
  fetchingUser: false,
  savingChanges: false,
  editMode: false,
  descriptionText: undefined,
  user: {},
  userProjects: [],
  error: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_USER_PROJECTS':
      return {
        ...state,
        fetchingUserProjects: true
      };
    case 'RECEIVED_USER_PROJECTS':
      return {
        ...state,
        userProjects: action.payload,
        fetchingUserProjects: false
      };
    case 'REQUEST_USER_PROJECTS_ERROR':
      return {
        ...state,
        error: action.error,
        fetchingUserProjects: false
      };
    case 'TOGGLE_EDIT_MODE':
      return {
        ...state,
        editMode: !state.editMode
      };
    case 'UPDATE_DESCRIPTION_TEXT':
      return {
        ...state,
        descriptionText: action.payload
      };
    case 'SAVING_CHANGES':
      return {
        ...state,
        savingChanges: true
      };
    case 'SAVED_CHANGES':
      return {
        ...state,
        savingChanges: false
      };
    case 'ERROR_SAVING_CHANGES':
      return {
        ...state,
        savingChanges: false,
        error: action.error
      };
    case 'FETCHING_USER':
      return {
        ...state,
        fetchingUser: true
      };
    case 'RECEIVED_USER':
      return {
        ...state,
        user: action.payload,
        fetchingUser: false
      };
    case 'REQUEST_USER_ERROR':
      return {
        ...state,
        error: action.error,
        fetchingUser: false
      };
    default:
      return state;
  }
};

export default user;
