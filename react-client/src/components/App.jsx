import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import HomePage from '../HomePage/HomePage.jsx';
import ProjectBoard from '../ProjectIdeas/ProjectBoard.jsx';
import ProjectView from '../ProjectView/ProjectView.jsx';
import NavBar from '../NavBar/NavBar.jsx';
import NewsBoard from '../NewsPage/NewsBoard.jsx';
import ProjectSubmission from '../CreateProject/ProjectSubmission/ProjectSubmission.jsx';
import UserProfile from '../Users/UserProfile.jsx';
import CreateProject from '../CreateProject/CreateProject.jsx';
import Inbox from '../Inbox/Inbox.jsx';
import InboxMessageThread from '../Inbox/InboxMessageThread.jsx';
import ArticleView from '../ArticleView/ArticleView.jsx';
import FilterBoard from '../FilterTags/FilterBoard.jsx';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/projects" component={ProjectBoard} />
          <Route exact path="/inbox" component={Inbox} />
          <Route path="/news" component={NewsBoard} />
          <Route path="/projects/:id" component={ProjectView} />
          <Route path="/articles/:id" component={ArticleView} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/createproject" component={CreateProject} />
          <Route path="/inbox/:id" component={InboxMessageThread} />
          <Route path="/users/:id" component={UserProfile} />
          <Route path="/categories" component={FilterBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
