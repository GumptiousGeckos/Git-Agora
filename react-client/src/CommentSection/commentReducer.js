const comment = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state];
    default:
      return state;
  }
};


const comments = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: comment(state.comments, action)
      };
    case 'FETCHING_COMMENTS':
      return {
        ...state,
        fetchingComments: true
      };
    case 'RECEIVED_COMMENTS':
      return {
        ...state,
        comments: action.payload,
        fetchingComments: false
      };
    case 'UPDATE_COMMENT_TEXT':
      return {
        ...state,
        content: action.payload
      };
    default:
      return state;
  }
}



export default comments;



