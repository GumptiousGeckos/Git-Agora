import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage.jsx';
import ProjectBoard from '../ProjectIdeas/ProjectBoard.jsx';
import ProjectView from '../ProjectView/ProjectView.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import NewsBoard from '../NewsPage/NewsBoard.jsx';
import UserProfile from '../Users/UserProfile.jsx';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectBoard} />
          <Route path="/news" component={NewsBoard} />
          <Route path="/projects/:id" component={ProjectView} />
          <Route path="/profile" component={UserProfile} />
        </div>
      </Router>
    );
  }
}

export default App;
