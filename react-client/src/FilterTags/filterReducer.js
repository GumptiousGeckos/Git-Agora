const initialState = {
  searchQuery: undefined
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_TEXT':
      return {
        ...state,
        searchQuery: action.payload
      };
    default:
      return state;
  }
};

export default filter;
