import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { changeTab } from './navActions';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleNavOnClick = this.handleNavOnClick.bind(this);
  }

  handleNavOnClick(event) {
    const tab = event.target.innerText.replace(/\s/g, '').toLowerCase();
    this.props.dispatch(changeTab(tab));
  }

  render() {
    const { activeTab } = this.props;

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
              <li className={(activeTab === 'news') ? "active": ""} onClick={this.handleNavOnClick}>
                <Link to={'/news'}>
                  <span className="glyphicon glyphicon-globe"> News</span>
                </Link>
              </li>
              <li className={(activeTab === 'projects') ? "active": ""} onClick={this.handleNavOnClick}>
                <Link to={'/projects'}>
                  <span className="glyphicon glyphicon-pencil"> Projects</span>
                </Link>
              </li>
              <li className={(activeTab === 'categories') ? "active": ""} onClick={this.handleNavOnClick}>
                <Link to={'/categories'}>
                  <span className="glyphicon glyphicon-tags"> Categories</span>
                </Link>
              </li>
              <li className={(activeTab === 'users') ? "active": ""} onClick={this.handleNavOnClick}>
                <Link to={'/users'}>
                  <span className="glyphicon glyphicon-user"> Users</span>
                </Link>
              </li>
              <li className={(activeTab === 'createproject') ? "active": ""} onClick={this.handleNavOnClick}>
                <Link to={'/createproject'}>
                  <span className="glyphicon glyphicon-user"> Create Project </span>
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/auth/github">Log in with GitHub</a>
              </li>
            </ul>

            <form className="navbar-form navbar-right">
              <div className="input-group add-on">
                <input className="form-control" placeholder="Search" />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit"><span className="glyphicon glyphicon-search"></span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    activeTab: state.activeTab
  };
};

export default connect(mapStateToProps)(NavBar);