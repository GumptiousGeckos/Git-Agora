const initialState = {
  fetchingArticles: false,
  articles: []
};


const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_ARTICLES':
      return {
        ...state,
        fetchingArticles: true
      };
    case 'RECEIVED_ARTICLES' :
      return {
        ...state,
        articles: action.payload,
        fetchingArticles: false
      };
    case 'ERROR_FETCHING_ARTICLES' :
      return {
        ...state,
        error: action.payload,
        fetchingArticles: false
      };
    default:
      return state;
  }
};

export default articles;
