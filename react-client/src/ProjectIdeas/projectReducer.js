var idCount = 0;
export default (state={posts: []}, action) => {
  switch(action.type) {
    case "CREATE_PROJECT": {
      return {
        ...state,
        posts: state.posts.concat({
          id: idCount++,
          title: "Project Title",
          description: "Project Description!",
          likes: 5,
          dislikes: 1
        })
      };
    }
    default: {
      return state;
    }
  }
};