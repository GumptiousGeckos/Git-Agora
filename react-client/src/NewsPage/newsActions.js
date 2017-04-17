import axios from 'axios';

export const fetchingArticles = () => ({
  type: 'FETCHING_ARTICLES'
});

export const receivedArticles = () => ({
  type: 'RECEIVED_ARTICLES'
});

export const fetchArticles = () => {
  return (dispatch) => {
    dispatch(fetchingArticles());
    // Mimics axios request to server
    setTimeout(() => {
      dispatch(receivedArticles());
    }, 1000);
  };
};
