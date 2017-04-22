const initialState = {
  fetchingHotProjects: false,
  fetchingHotNews: false,
  hotProjects: [],
  hotNews: [],
  error: null
};

const homepage = (state = initialState, action) => {
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
    case 'REQUEST_HOT_PROJECTS_ERROR':
      return {
        ...state,
        error: action.payload,
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
        fetchingHotNews: false
      };
    case 'REQUEST_HOT_NEWS_ERROR':
      return {
        ...state,
        error: action.payload,
        fetchingHotNews: false
      };
    default:
      return state;
  }
};

export default homepage;
