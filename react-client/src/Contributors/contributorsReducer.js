const initialState = {
  contributors: [],
  isFetching: false,
  fetchError: null
};

const contributorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_CONTRIBUTORS':
      return {
        ...initialState,
        isFetching: true
      };
    case 'FETCH_CONTRIBUTORS_COMPLETED':
      return {
        ...state,
        isFetching: false,
        contributors: action.contributors
      };
    case 'FETCH_CONTRIBUTORS_ERROR':
      return {
        ...state,
        isFetching: false,
        fetchError: action.error
      };
    default:
      return state;
  }
};

export default contributorsReducer;
