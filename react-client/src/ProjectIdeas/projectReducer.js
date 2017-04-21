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
    case 'TOGGLE_PROJECT_VOTE': 
      return {
        ...state,
        projects: state.projects.map((project) => {
          if (project.id === action.topic_id) {
            project.vote_type = project.vote_type || 0;
            if (project.vote_type === -1 ) {
              project.votes = (Number(project.votes) + 1).toString();
              project.vote_type = 0;
              return project;
            } else if (project.vote_type === 1) {
              project.votes = (Number(project.votes) - 1).toString();
              project.vote_type = 0;
              return project;
            } else if (project.vote_type === 0) {
              project.votes = (Number(project.votes) + action.vote_type).toString();
              project.vote_type = action.vote_type;
              return project;
            }
          } else {
            return project;
          }
        })
      };
    default:
      return state;
  }
};

export default projects;
