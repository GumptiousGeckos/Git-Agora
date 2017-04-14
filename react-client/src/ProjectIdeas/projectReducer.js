let idCount = 3;

const project = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [
        ...state,
        {
          id: idCount++,
          title: 'Project Title',
          description: 'Project Description!',
          likes: 5,
          dislikes: 1
        }
      ];
    default:
      return state;
  }
};

const projects = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return {
        ...state,
        projects: project(state.projects, action)
      };
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
    case 'UPDATE_MAIN_PROJECT':
      return {
        ...state,
        mainProject: action.payload
      };
    default:
      return state;
  }
};

export default projects;
