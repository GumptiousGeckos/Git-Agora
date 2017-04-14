const homepage = (state = {}, action) => {
  switch (action.type) {
    case 'FETCHING_HOT_PROJECTS':
      return {
        ...state,
        fetchingHotProjects: true
      };
    case 'RECEIVED_HOT_PROJECTS':
      return {
        ...state,
        hotProjects: action.payload,
        fetchingHotProjects: false
      };
    case 'FETCHING_HOT_NEWS':
      return {
        ...state,
        fetchingHotNews: true
      };
    case 'RECEIVED_HOT_NEWS':
      return {
        ...state,
        hotNews: action.payload,
        fetchingHotProjects: false
      };
    default:
      return state;
  }
};

export default homepage;
