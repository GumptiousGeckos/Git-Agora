const initialState = {
  contributions: [],
  isFetching: false,
  error: null
};

const contributionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_CONtrIBUTIONS':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_CONTRIBUTIONS_COMPLETED':
      return {
        ...state,
        isFetching: false,
        contributions: action.contributions
      };
    case 'FETCH_CONTRIBUTIONS_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default contributionsReducer;
