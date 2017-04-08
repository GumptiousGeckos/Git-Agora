import React from 'react';
import { connect } from 'react-redux';

import TestComponent from '../testFeature/TestComponent.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <TestComponent />
      </div>
    );
  }
};

export default App;