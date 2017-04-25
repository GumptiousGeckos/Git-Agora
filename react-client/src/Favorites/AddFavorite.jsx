import React from 'react';
import { connect } from 'react-redux';
import { insertFavorite, verifyFavoriteStatus, removeFavorite } from './favoriteActions';


export class AddFavorite extends React.Component {

  componentWillMount() {
    const { checkFavoriteStatus, user, type, favorite_id } = this.props;
    if (user)
    checkFavoriteStatus(user.id, type, favorite_id);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addFavorite, deleteFavorite, user, type, favorite_id, favorited } = this.props;

    if (favorited) {
      deleteFavorite(user.id, type, favorite_id);
    } else {
      addFavorite(user.id, type, favorite_id);
    }
  }

  render() {
    const { user, type, favorite_id, addFavorite, favorited, deleteFavorite } = this.props;
    let buttonTitle;
    favorited ? buttonTitle = 'Remove from Favorites' : buttonTitle = 'Add to Favorites';
      return (
          <button onClick={this.handleSubmit}>{buttonTitle}</button>
      )
  }
}

const mapStateToProps = state => (
  {
    user: state.navBar.user,
    favorited: state.favorites.favorited
  }
)

const mapDispatchToProps = dispatch => (
  {
    addFavorite: (user_id, type, favorite_id) => dispatch(insertFavorite(user_id, type, favorite_id)),
    checkFavoriteStatus: (user_id, type, favorite_id) => dispatch(verifyFavoriteStatus(user_id, type, favorite_id)),
    deleteFavorite: (user_id, type, favorite_id) => dispatch(removeFavorite(user_id, type, favorite_id))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AddFavorite);