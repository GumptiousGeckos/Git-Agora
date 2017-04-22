const initialState = {
  fetchingArticle: false,
  article: {},
  error: null
}

const toggle = (article, action) => {
  if (article.id === action.topic_id) {
    const newArticle = Object.create(article);
    newArticle.vote_type = article.vote_type || 0;
    if (newArticle.vote_type === -1 ) {
      newArticle.votes = (Number(newArticle.votes) + 1).toString();
      newArticle.vote_type = 0;
      return newArticle;
    } else if (newArticle.vote_type === 1) {
      newArticle.votes = (Number(newArticle.votes) - 1).toString();
      newArticle.vote_type = 0;
      return newArticle;
    } else if (newArticle.vote_type === 0) {
      newArticle.votes = (Number(newArticle.votes) + action.vote_type).toString();
      newArticle.vote_type = action.vote_type;
      return newArticle;
    }
  } else {
    return article;
  }
}

const article = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_ARTICLE':
      return {
        ...state,
        fetchingArticle: true,
      };
    case 'RECEIVED_ARTICLE':
      return {
        ...state,
        article: action.article,
        fetchingArticle: false
      };
    case 'REQUEST_ARTICLE_ERROR':
      return {
        ...state,
        error: action.error,
        fetchingArticle: false
      };
    case 'TOGGLE_ARTICLE_VOTE': 
      return {
        ...state,
        article: toggle(state.article, action)
      };
    default:
      return state
  };
}

export default article;