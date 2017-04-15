import React from 'react';
import { connect } from 'react-redux';

export class CreateProject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { repo } = this.props;
  }
}

const mapStateToProps = (state) => {
  return {
    repos: state.createProject
  }
}