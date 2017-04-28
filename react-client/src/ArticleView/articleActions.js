import axios from 'axios'; 

const requestArticle = () => ({
  type: 'FETCHING_ARTICLE'
})

const receivedArticle = article => ({
  type: 'RECEIVED_ARTICLE',
  article
})

const errorArticle = error => ({
  type: 'REQUEST_ARTICLE_ERROR',
  error
})

export const getArticleById = id => (
  (dispatch) => {
    dispatch(requestArticle());
    axios.get('api/articles/' + id)
      .then((response) => {
        dispatch(receivedArticle(response.data[0]));
      })
      .catch((error) => {
        dispatch(errorArticle(error));
      });
  }
);