
import React from 'react';

export default (props) => (
  <div className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">git-agora</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li>
            <a href="#">News</a>
          </li>
          <li className="active">
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Users</a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">Sign up</a>
          </li>
          <li>
            <a href="#">Log in</a>
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