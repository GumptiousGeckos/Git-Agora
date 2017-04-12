import React from 'react';

import HomePage from '../HomePage/HomePage.jsx';
import ProjectBoard from '../ProjectIdeas/ProjectBoard.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import TestComponent from '../TestFeature/TestComponent.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <HomePage />
        <ProjectBoard />
      </div>
    );
  }
};

export default App;