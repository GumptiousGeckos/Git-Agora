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
              <span className="fa fa-github fa-lg nav-icon"></span>
              <span className="nav-header"> {user.username} </span>
            </Link>
          </div>
          <div className="nav-bar-page nav-user nav-topic" onClick={this.handleNavOnClick}>
            <Link to={'/inbox'}>
              <span className="fa fa-inbox fa-lg nav-icon"></span>
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
              <span className="fa fa-github fa-2x nav-icon"></span>
              <span className="nav-header" >
                <a className="nav-header nav-topic none" href="/auth/github"> Log in with GitHub </a>
              </span>
          </div>
      );
    }

    return (
        <div className="navbar">
          <div className="row"> 
              <div className="two columns home-nav">
                <Link to={'/'}>
                  <span className="nav-header" onClick={this.handleNavOnClick}>Git-Agora</span>
                </Link>
              </div>
            <div className="six columns main-nav">
              <div className={(activeTab === 'news') ? 'active nav-topic' : 'nav-topic'} onClick={this.handleNavOnClick}>
                <Link to={'/news'}>  
                  <span className="fa fa-newspaper-o fa-lg nav-icon"></span>
                  <span className="nav-header" name="news"> News </span>
                </Link>
              </div>
              <div className={(activeTab === 'projects') ? 'active nav-topic' : 'nav-topic'} onClick={this.handleNavOnClick}>
                <Link to={'/projects'}>
                  <span className="fa fa-flask fa-lg nav-icon"></span>
                  <span className="nav-header" name="projects"> Projects </span>
                </Link>
              </div>
              <div className={(activeTab === 'categories') ? 'active nav-topic' : 'nav-topic'} onClick={this.handleNavOnClick}>
                <Link to={'/categories'}>
                  <span className="fa fa-tags fa-lg nav-icon"></span>
                  <span className="nav-header" name="categories"> Categories </span>
                </Link>
              </div>
              <div className={(activeTab === 'createproject') ? 'active nav-topic' : 'nav-topic'} onClick={this.handleNavOnClick}>
                <Link to={'/createproject'}>
                  <span className="fa fa-plus-circle fa-lg nav-icon"></span>
                  <span className="nav-header"> Create Project </span>
                </Link>
              </div>
            </div>
            {navBarRight}
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
