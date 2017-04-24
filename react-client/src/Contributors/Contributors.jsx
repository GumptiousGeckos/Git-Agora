import React from 'react';
import { connect } from 'react-redux';
import fetchContributors from './contributorsActions';

class ContributorsView extends React.Component {
  componentDidMount() {
    const { fetchContributors, type, id } = this.props;
    fetchContributors(type, id);
  }
  render() {
    return (
      <div />
    );
  }
}

const mapStateToProps = state => (
  {
    ...state.contributors
  }
);
const mapDispatchToProps = dispatch => (
  {
    fetchContributors: (type, id) => {
      dispatch(fetchContributors(type, id));
    }
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(ContributorsView);
