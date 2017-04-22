const initialState = {
  fetchingProject: false,
  fetchingCollaborators: false,
  fetchingTags: false,
  project: {},
  collaborators: [],
  tags: [],
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
    case 'FETCHING_TAGS':
      return {
        ...state,
        fetchingTags: true
      };
    case 'RECEIVED_TAGS':
      return {
        ...state,
        tags: action.payload,
        fetchingTags: false
      };
    case 'REQUEST_TAGS_ERROR':
      return {
        ...state,
        fetchingTags: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default project;
