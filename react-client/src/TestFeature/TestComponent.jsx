import React from 'react';
import { connect } from 'react-redux';

import { testFunction } from './testAction';

export class TestComponent extends React.Component {

  componentWillMount() {
    // commented out for jest test
    // this.props.dispatch(testFunction());
  }

  render() {
    const { magic } = this.props;
    return (
      <div>
        <h1>Hello World!</h1>
        Is this magic?
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    magic: state.testReducer.test,
  };
};

export default connect(mapStateToProps)(TestComponent);