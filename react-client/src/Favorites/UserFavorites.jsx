import React from 'react';
import { connect } from 'react-redux';
import UserFavoritesEntry from './UserFavoritesEntry.jsx';
import AddFavorite from './AddFavorite.jsx';

import { fetchFavorites, setDisplayFavorites } from './favoriteActions';

export class UserFavorites extends React.Component {
  constructor(props) {
    super(props);

    this.filterFavorites = this.filterFavorites.bind(this);
  }

  componentWillMount(props) {
    const { authorized, user, profileId, getFavorites, favorites, setFavorites } = this.props;
    const onOwnProfilePage = (authorized && user.id === profileId);

    if (user)
      getFavorites(user.id);
  }

  filterFavorites(e) {
    const { setFavorites, favorites } = this.props;
    const filteredFavorites = favorites.filter(favorite => {
      return favorite.type === e.target.value;
    });
    setFavorites(filteredFavorites);
  }

  render() {
    const { favorites, authorized, user, profileId, displayFavorites } = this.props;
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
                    <td>
                      <button value="user" onClick={this.filterFavorites}>Users</button>
                    </td>
                    <td>
                      <button value="project" onClick={this.filterFavorites}>Projects</button>
                    </td>
                    <td>
                      <button value="article" onClick={this.filterFavorites}>Articles</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul>{displayFavorites.map(favorite => <UserFavoritesEntry favorite={favorite}/>)}</ul>
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
    profileId: state.userProfile.user.id,
    displayFavorites: state.favorites.displayFavorites
  }
)

const mapDispatchToProps = dispatch => (
  {
    getFavorites: (user_id) => dispatch(fetchFavorites(user_id)),
    setFavorites: (displayFavorites) => dispatch(setDisplayFavorites(displayFavorites))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserFavorites);