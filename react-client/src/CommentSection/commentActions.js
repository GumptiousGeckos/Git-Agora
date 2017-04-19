import axios from 'axios';

export const getComments = () => ({
  type: 'FETCHING_COMMENTS'
});

export const addComment = () => ({
  type: 'ADD_COMMENT'
});

export const receivedComments = comments => ({
  type: 'RECEIVED_COMMENTS',
  payload: comments
});


export const errorComments = err => ({
  type: 'REQUEST_COMMENTS_ERROR',
  error: err
})


export const fetchComments = () => (
  (dispatch) => {
    dispatch(getComments());
    axios.get('/api/comments')
      .then((response) => {
        dispatch(receivedComments(response.data));
      })
      .catch((err) => {
        dispatch(errorComments(err));
      });
  }
);