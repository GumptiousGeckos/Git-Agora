let idCount = 11;

const comment = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: idCount++,
          username: 'NoFussGus',
          time: '3 AM EVERYDAY',
          content: 'THIS IS THE BEST COMMENT'
        }
      ];
    default:
      return state;
  }
};


const comments = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: comment(state.coments, action)
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
    default:
      return state;
  }
}



export default comments;



