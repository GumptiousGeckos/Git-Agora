import React from 'react';
import { connect } from 'react-redux';
import UserFavoritesEntry from './UserFavoritesEntry.jsx';
import { fetchFavorites, setDisplayFavorites } from './favoriteActions';

export class UserFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.filterFavorites = this.filterFavorites.bind(this);
  }

  componentWillMount(props) {
    const { profileId, getFavorites, favorites, setFavorites } = this.props;
    getFavorites(profileId);
  }

  filterFavorites(e) {
    const { setFavorites, favorites } = this.props;
    const filteredFavorites = favorites.filter(favorite => {
      return favorite.type === e.target.value;
    });
    setFavorites(filteredFavorites);
  }

  render() {
    const { favorites, profileId, displayFavorites } = this.props;

    return (
      <div>
        <h4 className="tab-title">Favorites</h4>
        <div className="twelve columns">
          <button className="favorites-tab" value="user" onClick={this.filterFavorites}>Users</button>
          <button className="favorites-tab" value="project" onClick={this.filterFavorites}>Projects</button>
          <button className="favorites-tab" value="article" onClick={this.filterFavorites}>Articles</button>
        </div>
        <ul>{displayFavorites.map(favorite => <UserFavoritesEntry favorite={favorite}/>)}</ul>
      </div>
    );
  }
};

const mapStateToProps = state => (
  {
    favorites: state.favorites.favorites,
    profileId: state.userProfile.user.id,
    displayFavorites: state.favorites.displayFavorites
  }
);

const mapDispatchToProps = dispatch => (
  {
    getFavorites: (user_id) => dispatch(fetchFavorites(user_id)),
    setFavorites: (displayFavorites) => dispatch(setDisplayFavorites(displayFavorites))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserFavorites);