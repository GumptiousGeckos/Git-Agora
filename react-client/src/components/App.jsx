import React from 'react';

import TestComponent from '../TestFeature/TestComponent.jsx';
import ProjectBoard from '../ProjectIdeas/ProjectBoard.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <div style={{margin: "auto 50%", width: "100%"}}>
          <h1>Git Agora</h1>
        </div>
        <TestComponent />
        <ProjectBoard />
      </div>
    );
  }
};

export default App;