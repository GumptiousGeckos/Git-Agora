const initialState = {
  fetchingProjects: false,
  projects: [],
  error: null
};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_PROJECTS':
      return {
        ...state,
        fetchingProjects: true
      };
    case 'RECEIVED_PROJECTS':
      return {
        ...state,
        projects: action.payload,
        fetchingProjects: false
      };
    case 'REQUEST_PROJECTS_ERROR':
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default projects;
