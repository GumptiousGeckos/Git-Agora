import React from 'react';
import { connect } from 'react-redux';

import { testFunction } from './testAction';

class TestComponent extends React.Component {

  componentWillMount() {
    this.props.dispatch(testFunction());
  }

  render() {
    const { magic } = this.props;
    return (
      <div>
        Hello World!
        Is this magic? {magic.toString()}
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