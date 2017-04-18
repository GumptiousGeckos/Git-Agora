import axios from 'axios';

export const fetchingArticles = () => ({
  type: 'FETCHING_ARTICLES'
});

export const receivedArticles = (articles) => ({
  type: 'RECEIVED_ARTICLES',
  payload: articles
});

export const errorFetchingArticles = (error) => ({
  type: 'ERROR_FETCHING_ARTICLES',
  payload: error
});

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch(fetchingArticles());
    // Mimics axios request to server
    axios.get('/api/articles')
      .then((response) => {
        dispatch(receivedArticles(response.data));
      })
      .catch((error) => {
        dispatch(errorFetchingArticles(error));
      });
  };
};
