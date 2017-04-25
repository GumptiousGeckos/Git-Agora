import axios from 'axios';

const retrievingContributors = () => (
  {
    type: 'FETCHING_CONTRIBUTORS'
  }
);
const receivedContributors = contributors => (
  {
    type: 'FETCH_CONTRIBUTORS_COMPLETED',
    contributors
  }
);
const receivedContributorsError = error => (
  {
    type: 'FETCH_CONTRIBUTORS_ERROR',
    error
  }
);
const fetchContributors = (q, id) => (
  (dispatch) => {
    dispatch(retrievingContributors());
    axios.get('/api/contributors', {
      params: { q, id }
    })
    .then(results => dispatch(receivedContributors(results.data)))
    .catch(error => dispatch(receivedContributorsError(error)));
  }
);

export default fetchContributors;
