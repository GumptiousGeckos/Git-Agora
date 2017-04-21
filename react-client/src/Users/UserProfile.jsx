import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import UserProjects from './UserProjects.jsx';
import { toggleEditMode, getUserById, updateDescriptionText,
         saveChanges } from './userActions';

export class UserProfile extends React.Component {

  componentWillMount() {
    const { user, getUserById, match } = this.props;
    getUserById(match.params.id);
  }

  render() {
    const { user, editMode, descriptionText = user.description,
            toggleEditMode, updateDescriptionText, saveChanges } = this.props;
    const { id } = this.props.match.params;

    let description, editModeButton;

    if (!editMode) {
      description = (
        <div className="col-md-10">
          {descriptionText}
        </div>
      );
      editModeButton = (
        <div className="col-md-2 text-right">
          <button
            type="button"
            className="btn btn-default"
            onClick={toggleEditMode}
          >
            <span className="glyphicon glyphicon-edit" />
          </button>
        </div>
      );
    } else {
      description = (
        <div className="col-md-10">
          <textarea
            rows="4"
            cols="37"
            value={descriptionText}
            onChange={(e) => { updateDescriptionText(e.target.value); }}
          />
        </div>
      );
      editModeButton = (
        <div className="col-md-2 text-right">
          <button
            type="button"
            className="btn btn-default"
            onClick={() => { toggleEditMode(); saveChanges(descriptionText); }}
          >
            <span className="glyphicon glyphicon-floppy-saved" />
          </button>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="col-md-4">
          <div className="picture">
            <img src={user.picture ? user.picture : 'http://www.plentyofcheddar.com/wp-content/uploads/2013/12/questionmark51.jpg'} />
            <div className="text-left">
              {description}
              {editModeButton}
              <div className="col-md-12">
                <h5>Name: {user.name}</h5>
                <h5>{'Github: '}
                  <a href={'https://www.github.com/' + user.username} target="_blank">
                    {user.username}
                  </a>
                </h5>
                <h5>Email: {user.email}</h5>
                <h5>Points: {user.points}</h5>
              </div>
            </div>
            <div className="text-left col-md-12">
              <h4 className="underline">Tags</h4>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <UserProjects id={id} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userProfile.user,
    editMode: state.userProfile.editMode,
    descriptionText: state.userProfile.descriptionText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEditMode: () => dispatch(toggleEditMode()),
    updateDescriptionText: text => dispatch(updateDescriptionText(text)),
    saveChanges: text => dispatch(saveChanges(text)),
    getUserById: id => dispatch(getUserById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
