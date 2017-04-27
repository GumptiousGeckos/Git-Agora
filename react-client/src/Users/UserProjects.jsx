import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUserProjects } from './userProjectsActions';

export class UserProjects extends React.Component {

  componentWillMount() {
    const { getUserProjects, id } = this.props;
    getUserProjects(id);
  }

  render() {
    const { userProjects } = this.props;

    return (
      <div>
        <h4 className="tab-title">Projects</h4>
        <div className="list-group">
          <ul>
          {
            userProjects.map(project =>
              <li>
              <Link to={'/projects/' + project.id} key={project.id}>
                <span>{project.title}</span><br></br>
              </Link>
              <span>{project.description}</span>
              </li>
            )
          }
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    userProjects: state.userProfile.userProjects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProjects: id => dispatch(getUserProjects(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);
