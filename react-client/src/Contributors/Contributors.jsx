import React from 'react';
import { connect } from 'react-redux';

class ContributorsView extends React.Component {
  componentDidMount() {
    fetchContributors();
  }
  render() {
    return (
      <div />
    );
  }
}

export default ContributorsView;
