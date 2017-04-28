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
      <div id="user-projects-group">
        <h4 className="tab-title"></h4>
        <div className="list-group">
          {
            userProjects.map(project =>
              <div>
              <Link to={'/projects/' + project.id} key={project.id}>
                <span className="prof-proj-title">{project.title}</span><br></br>
              </Link>
              <span>{project.description}</span>
              </div>
            )
          }
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
