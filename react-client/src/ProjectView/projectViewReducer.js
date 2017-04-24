const initialState = {
  fetchingProject: false,
  fetchingCollaborators: false,
  project: {},
  collaborators: [],
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
        fetchingProject: false,
        error: action.error
      };
    case 'FETCHING_COLLABORATORS':
      return {
        ...state,
        fetchingCollaborators: true
      };
    case 'RECEIVED_COLLABORATORS':
      return {
        ...state,
        collaborators: action.payload,
        fetchingCollaborators: false
      };
    case 'REQUEST_COLLABORATORS_ERROR':
      return {
        ...state,
        fetchingCollaborators: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default project;
