import React from 'react';

import ProjectBoard from '../ProjectIdeas/ProjectBoard.jsx';
import TestComponent from '../TestFeature/TestComponent.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <div style={{margin: "auto 50%", width: "100%"}}>
          <h1>git-agora</h1>
        </div>
        <TestComponent />
        <ProjectBoard />
      </div>
    );
  }
};

export default App;