import React from 'react';
import { connect } from 'react-redux';

export class CreateProject extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { repo } = this.props;
    if (this.state.page === 'REPO_LIST') {
      return (
        <div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.createProject
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
