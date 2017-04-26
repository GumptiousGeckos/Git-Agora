import axios from 'axios';

const retrievingContributions = () => (
  {
    type: 'FETCHING_CONTRIBUTIONS'
  }
);
const receivedContributions = contributions => (
  {
    type: 'FETCH_CONTRIBUTIONS_COMPLETED',
    contributions
  }
);
const receivedContributionsError = error => (
  {
    type: 'FETCH_CONTRIBUTIONS_ERROR',
    error
  }
);
const fetchContributions = (type, id) => (
  (dispatch) => {
    dispatch(retrievingContributions());
    axios.get('/api/contributions', {
      params: {
        q: 'contributions',
        type,
        id
      }
    })
    .then((results) => {
      dispatch(receivedContributions(results.data));
    })
    .catch(error => dispatch(receivedContributionsError(error)));
  }
);

export default fetchContributions;
