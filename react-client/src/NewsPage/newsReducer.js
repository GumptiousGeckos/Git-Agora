const initialState = {
  fetchingArticles: false,
  articles: []
};


const news = (state = initialState, action) => {
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
    case 'TOGGLE_ARTICLE_VOTE': 
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.id === action.topic_id) {
            article.vote_type = article.vote_type || 0;
            if (article.vote_type === -1 ) {
              article.votes = (Number(article.votes) + 1).toString();
              article.vote_type = 0;
              return article;
            } else if (article.vote_type === 1) {
              article.votes = (Number(article.votes) - 1).toString();
              article.vote_type = 0;
              return article;
            } else if (article.vote_type === 0) {
              article.votes = (Number(article.votes) + action.vote_type).toString();
              article.vote_type = action.vote_type;
              return article;
            }
          } else {
            return article;
          }
        })
      }
    default:
      return state;
  }
};

export default news;
