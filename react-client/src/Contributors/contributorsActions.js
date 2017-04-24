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
const fetchContributors = (type, id) => (
  (dispatch) => {
    dispatch(retrievingContributors());
    axios.get('/api/contributors', {
      q: 'contributors',
      type,
      id
    })
    .then(results => dispatch(receivedContributors(results)))
    .catch(error => dispatch(receivedContributorsError(error)));
  }
);

export default fetchContributors;
