import React from 'react';
import { connect } from 'react-redux';
import ComposeMessageButton from '../Messages/ComposeMessageButton.jsx';
import AddFavorite from '../Favorites/AddFavorite.jsx';
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
            saveChanges, onSendMessageClick, profileId } = this.props;
    const ownProfile = currentUser ? user.id === currentUser.id : false;

    let description;
    let editModeButton;

    if (!editMode) {
      description = (
        <div className="">
          {descriptionText}
        </div>
      );
      if (ownProfile) {
        editModeButton = (
          <div className="text-right">
          Description
            <button
              type="button"
              className="profile-edit"
              onClick={toggleEditMode}
            >Edit
              <span className="" />
            </button>
          </div>
        );
      }
    } else {
      description = (
        <div className="">
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
          <div className="text-right">
            Description
            <button
              type="button"
              className="profile-edit"
              onClick={() => { toggleEditMode(); saveChanges(descriptionText); }}
            >Save
              <span className="" />
            </button>
          </div>
        );
      }
    }

    return (
      <div>
        <div className="picture">
          <img src={user.avatar ? user.avatar : 'http://www.plentyofcheddar.com/wp-content/uploads/2013/12/questionmark51.jpg'} alt="user profile" />
        </div>
        <div>
          <div id="profile-username">
            <a href={'https://www.github.com/' + user.username} target="_blank">
                {user.username}
              </a>
          </div>
          <div>
            <table className="u-full-width">
              <tbody>
                <tr>
                  <td className="points-table">Dev Points</td>
                  <td className="points-table">{user.dev_points || '0'}</td>
                </tr>
                <tr>
                  <td className="points-table">Idea Points</td>
                  <td className="points-table">{user.idea_points || '0'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h6>{user.email}</h6>
          </div>
          <div>
            { !ownProfile ? (<AddFavorite type={'user'} favorite_id={profileId}/>) : '' }
          </div>
          <div>
            { !ownProfile ? (<ComposeMessageButton userProfile={user.username} />) : '' }
          </div>
        </div>
          <div className="text-left">
            <div className="">
            </div>
            <div className="profile-description">{editModeButton}</div>
            {description}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    user: state.userProfile.user,
    currentUser: state.navBar.user,
    profileId: state.userProfile.user.id,
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
