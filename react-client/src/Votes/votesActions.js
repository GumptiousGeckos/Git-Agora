import axios from 'axios';


const logInToVote = () => ({
  type: 'LOG_IN_TO_VOTE'
})
const toggleArticleVote = (topic_id, vote_type) => ({
  type: 'TOGGLE_ARTICLE_VOTE',
  topic_id,
  vote_type
})
const toggleProjectVote = (topic_id, vote_type) => ({
  type: 'TOGGLE_PROJECT_VOTE',
  topic_id,
  vote_type
})

export const vote = (user, vote_type, type, topic_id, userVote) => ( (dispatch) => {
    if (user) {
      if (type === 'article') {
        dispatch(toggleArticleVote(topic_id, vote_type))
      } 
      if (type === 'project') {
        dispatch(toggleProjectVote(topic_id, vote_type))
      }
      const user_id = user[0].id;
      if (userVote === -1 || userVote === 1) {
        vote_type = 0;
      }
      axios.put('/api/votes', {user_id: user_id, vote_type: vote_type, type: type, topic_id: topic_id})
      .then(results => console.log('results', results))
      .catch(error => console.error('error', error));
    } else {
      return dispatch(logInToVote());
    }
  
});