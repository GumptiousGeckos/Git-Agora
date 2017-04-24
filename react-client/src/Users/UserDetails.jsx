import React from 'react';
import { connect } from 'react-redux';
import ComposeMessageButton from '../Messages/ComposeMessageButton.jsx';
import { toggleEditMode, getUserById, updateDescriptionText,
         saveChanges } from './userActions';

export class UserDetails extends React.Component {

  componentWillMount() {
    const { getUserById, id } = this.props;
    getUserById(id);
  }

  componentWillReceiveProps(nextProps) {
    const { getUserById, id } = nextProps;
    if (this.props.id !== id) {
      getUserById(id);
    }
  }

  render() {
    const { user = {}, currentUser, descriptionText = user.description,
            editMode, toggleEditMode, updateDescriptionText,
            saveChanges, onSendMessageClick } = this.props;
    const ownProfile = currentUser ? user.id === currentUser.id : false;

    let description;
    let editModeButton;

    if (!editMode) {
      description = (
        <div className="col-md-10">
          {descriptionText}
        </div>
      );
      if (ownProfile) {
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
      }
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
      if (ownProfile) {
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
    }

    return (
      <div>
        <div className="picture">
          <img src={user.avatar ? user.avatar : 'http://www.plentyofcheddar.com/wp-content/uploads/2013/12/questionmark51.jpg'} alt="user profile" />
          { !ownProfile ? (<ComposeMessageButton userProfile={user.username} />) : '' }
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    user: state.userProfile.user,
    currentUser: state.navBar.user,
    editMode: state.userProfile.editMode,
    descriptionText: state.userProfile.descriptionText
  }
);

const mapDispatchToProps = dispatch => (
  {
    toggleEditMode: () => dispatch(toggleEditMode()),
    updateDescriptionText: text => dispatch(updateDescriptionText(text)),
    saveChanges: text => dispatch(saveChanges(text)),
    getUserById: id => dispatch(getUserById(id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
