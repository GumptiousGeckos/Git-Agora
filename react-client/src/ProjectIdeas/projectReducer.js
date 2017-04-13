var idCount = 0;
const project = (state={}, action) => {
  switch(action.type) {
    case "ADD_PROJECT": {
      return {
        id: idCount++,
        title: "Project Title",
        description: "Project Description!",
        likes: 5,
        dislikes: 1
      };
    }
    default: {
      return state;
    }
  }
};

const projects = (state=[], action) => {
  switch(action.type) {
    case "ADD_PROJECT": {
      return [
        ...state,
        project(undefined, action)
      ];
    }
    case "FETCH_PROJECTS": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default projects;