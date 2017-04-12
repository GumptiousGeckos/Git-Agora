import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomePage from '../HomePage/HomePage.jsx';
import ProjectBoard from '../ProjectIdeas/ProjectBoard.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import TestComponent from '../TestFeature/TestComponent.jsx';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route path='/projects' component={ProjectBoard} />
        </div>
      </Router>
    );
  }
};

export default App;