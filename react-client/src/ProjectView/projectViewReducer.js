const initialState = {
  fetchingProject: false,
  project: {},
  error: null
};

const project = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_PROJECT':
      return {
        ...state,
        fetchingProject: true
      };
    case 'RECEIVED_PROJECT':
      return {
        ...state,
        project: action.payload,
        fetchingProject: false
      };
    case 'REQUEST_PROJECT_ERROR':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default project;
