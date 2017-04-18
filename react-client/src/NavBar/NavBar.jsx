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
        <ul className="nav navbar-nav navbar-right">
          <li>
            <h6 className="nav-center">Welcome {user[0].username}!</h6>
          </li>
          <li>
            <Link to={'/profile'}>
              <span className="glyphicon glyphicon-user" onClick={this.handleNavOnClick}> Profile</span>
            </Link>
          </li>
          <li>
            <a>Log out</a>
          </li>
        </ul>
      );
    } else {
      navBarRight = (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="/auth/github">Log in with GitHub</a>
          </li>
        </ul>
      );
    }

    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to={'/'}>
              <span className="navbar-brand" onClick={this.handleNavOnClick}>git-agora</span>
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className={(activeTab === 'news') ? 'active' : ''} onClick={this.handleNavOnClick}>
                <Link to={'/news'}>
                  <span className="glyphicon glyphicon-globe"> News</span>
                </Link>
              </li>
              <li className={(activeTab === 'projects') ? 'active' : ''} onClick={this.handleNavOnClick}>
                <Link to={'/projects'}>
                  <span className="glyphicon glyphicon-pencil"> Projects</span>
                </Link>
              </li>
              <li className={(activeTab === 'categories') ? 'active' : ''} onClick={this.handleNavOnClick}>
                <Link to={'/categories'}>
                  <span className="glyphicon glyphicon-tags"> Categories</span>
                </Link>
              </li>
              <li className={(activeTab === 'createproject') ? 'active' : ''} onClick={this.handleNavOnClick}>
                <Link to={'/createproject'}>
                  <span className="glyphicon glyphicon-user"> Create Project</span>
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {navBarRight}
            </ul>
            <form className="navbar-form navbar-right">
              <div className="input-group add-on">
                <input className="form-control" placeholder="Search" />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <span className="glyphicon glyphicon-search" />
                  </button>
                </div>
              </div>
            </form>
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
