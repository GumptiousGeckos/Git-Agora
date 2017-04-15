const initialState = {
  repo: null,
  description: null
};

const projectSubmissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_PROJECT': 
      return {
        ...state,
        repo: action.repo
      };
    default:
      return state;
  }
}

export default projectSubmissionReducer;
