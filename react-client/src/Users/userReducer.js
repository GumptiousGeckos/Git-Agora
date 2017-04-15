const user = (state = {}, action) => {
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
    default:
      return state;
  }
};

export default user;
