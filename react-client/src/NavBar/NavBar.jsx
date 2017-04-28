import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeTab, checkUserLoggedIn } from './navActions';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavOnClick = this.handleNavOnClick.bind(this);
  }

  componentWillMount() {
    const { checkUserLoggedIn } = this.props;
    checkUserLoggedIn();
  }

  handleNavOnClick(event) {
    const { changeTab } = this.props;
    const tab = event.target.innerText.replace(/\s/g, '').toLowerCase();
    changeTab(tab);
  }

  render() {
    const { activeTab, loggedIn, user } = this.props;

    let navBarRight;

    if (loggedIn) {
      navBarRight = (
        <div className="four columns user-nav">
          <div className="nav-bar-page nav-user nav-topic" onClick={this.handleNavOnClick}>
            <Link to={'/users/' + user.id}>
              <span className="nav-header log-in"> {user.username} </span>
            </Link>
          </div>
          <div className="nav-bar-page nav-user nav-topic" onClick={this.handleNavOnClick}>
            <Link to={'/inbox'}>
              <span className="nav-header"> Inbox </span>
            </Link>
          </div>
          <div className="nav-bar-page nav-user nav-topic">
            <span className="nav-header none"><a href="auth/logout" className="nav-header none">Log out</a></span>
          </div>
        </div>
      );
    } else {
      navBarRight = (
          <div className="four columns  user-nav nav-topic">
              <span className="nav-header user-nav" >
                <a className="nav-header nav-topic none log-in" href="/auth/github"> LOG IN </a>
              <span className="fa fa-github fa-lg nav-icon"></span>
              </span>
          </div>
      );
    }

    return (
        <div className="navbar">
          <div className="container">
            <div className="row"> 
                <div className="two columns home-nav">
                  <Link to={'/'}>
                    <span className="nav-header git-agora" onClick={this.handleNavOnClick}>Git Agora</span>
                  </Link>
                </div>
              <div className="six columns main-nav">
                <div className={(activeTab === 'news') ? 'active nav-topic nav-topic-main' : 'nav-topic nav-topic-main'} onClick={this.handleNavOnClick}>
                  <Link to={'/news'}>  
                    <span className="nav-header"> NEWS </span>
                  </Link>
                </div>
                <div className={(activeTab === 'projects') ? 'active nav-topic nav-topic-main' : 'nav-topic nav-topic-main'} onClick={this.handleNavOnClick}>
                  <Link to={'/projects'}>
                    <span className="nav-header"> PROJECTS </span>
                  </Link>
                </div>
                <div className={(activeTab === 'categories') ? 'active nav-topic nav-topic-main' : 'nav-topic nav-topic-main'} onClick={this.handleNavOnClick}>
                  <Link to={'/categories'}>
                    <span className="nav-header"> DISCOVER </span>
                  </Link>
                </div>
                <div className={(activeTab === 'createproject') ? 'active nav-topic nav-topic-main' : 'nav-topic nav-topic-main'} onClick={this.handleNavOnClick}>
                  <Link to={'/createproject'}>
                    <span className="nav-header"> CREATE PROJECT </span>
                  </Link>
                </div>
              </div>
              {navBarRight}
            </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeTab: state.navBar.activeTab,
    loggedIn: state.navBar.authorized,
    user: state.navBar.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTab: tab => dispatch(changeTab(tab)),
    checkUserLoggedIn: () => dispatch(checkUserLoggedIn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
