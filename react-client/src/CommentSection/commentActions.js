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
});

export const updateCommentText = text => ({
  type: 'UPDATE_COMMENT_TEXT',
  payload: text
});


export const fetchComments = (topic_id, type) => (
  (dispatch) => {
    dispatch(getComments());
    axios.get('/api/comments', { params: { topic_id, type } })
      .then((response) => {
        dispatch(receivedComments(response.data));
      })
      .catch((err) => {
        dispatch(errorComments(err));
      });
  }
);

export const insertComment = (topic_id, type, user_id, date_created, content) => (
  (dispatch) => {
    dispatch(addComment());
    axios.post('/api/comments', { topic_id, type, user_id, date_created, content })
      .then((response) => {
        console.log('Comment added');
        dispatch(fetchComments(topic_id, type));
      })
      .catch((err) => {
        console.log('ERROR adding comment: ', err);
      });
  }
);
