import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUserProjects } from './userActions';
import { updateMainProject } from '../ProjectIdeas/projectActions';

export class UserProfile extends React.Component {

  componentWillMount() {
    const { getUserProjects } = this.props;
    getUserProjects();
  }

  render() {
    const { user, userProjects, updateMainProject } = this.props;
    console.log('userProjects', userProjects);
    return (
      <div className="container">
        <div className="col-md-6">
          <div className="picture">
            <img src="http://weknowmemes.com/wp-content/uploads/2012/07/oh-god-who-am-i.jpg" />
            <div className="text-left">
              <h4>information about user</h4>
              <h5>Name: </h5>
              <h5>Handle: </h5>
              <h5>Points: </h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Projects</h1>
          <div className="list-group">
            {
              userProjects && userProjects.map(project =>
                <Link to={'/projects/' + project.id} key={project.id}>
                  <button
                    type="button"
                    className="list-group-item"
                    onClick={() => { updateMainProject(project); }}
                  >
                    <span>{project.title}</span>
                    <h4>{project.description}</h4>
                  </button>
                </Link>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    userProjects: state.user.userProjects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProjects: () => dispatch(fetchUserProjects()),
    updateMainProject: project => dispatch(updateMainProject(project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
