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
        <h1 className="text-center">Projects</h1>
        <div className="list-group">
          {
            userProjects.map(project =>
              <Link to={'/projects/' + project.id} key={project.id}>
                <button
                  type="button"
                  className="list-group-item"
                >
                  <span>{project.title}</span>
                  <h4>{project.description}</h4>
                </button>
              </Link>
            )
          }
        </div>
      </div>
    );
  }
}

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
