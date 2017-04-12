import React from 'react';

import ProjectBoard from '../ProjectIdeas/ProjectBoard.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import TestComponent from '../TestFeature/TestComponent.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <ProjectBoard />
      </div>
    );
  }
};

export default App;