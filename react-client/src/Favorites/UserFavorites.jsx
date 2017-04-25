import React from 'react';
import { connect } from 'react-redux';
import UserFavoritesEntry from './UserFavoritesEntry.jsx';
import AddFavorite from './AddFavorite.jsx';

import { fetchFavorites } from './favoriteActions';

export class UserFavorites extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount(props) {
    const { authorized, user, profileId, getFavorites } = this.props;
    const onOwnProfilePage = (authorized && user.id === profileId);

    if (user)
      getFavorites(user.id);
  }

  render() {
    const { favorites, authorized, user, profileId } = this.props;
    const onOwnProfilePage = authorized && user.id === profileId;

    if (profileId) {
      if (authorized) {
        if (onOwnProfilePage) {
          return (
            <div>
              <table>
              <tbody>

                <tr><th>My Favorites</th></tr>
                <tr>
                    {favorites && favorites.map(favorite => <UserFavoritesEntry favorite={favorite}/>)}
                </tr>
              </tbody>
              </table>
            </div>
          );
        } else {
          return (
            <div>
              <AddFavorite type={'user'} favorite_id={profileId}/>
            </div>
          );
        }
      }
    }
    return (
      <div>
      </div>
    )

  }
};

const mapStateToProps = state => (
  {
    favorites: state.favorites.favorites,
    authorized: state.navBar.authorized,
    user: state.navBar.user,
    profileId: state.userProfile.user.id
  }
)

const mapDispatchToProps = dispatch => (
  {
    getFavorites: (user_id) => dispatch(fetchFavorites(user_id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserFavorites);