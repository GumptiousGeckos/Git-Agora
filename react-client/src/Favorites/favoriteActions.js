import axios from 'axios';

export const getFavorites = () => ({
  type: 'FETCHING_FAVORITES'
});

export const setDisplayFavorites = displayFavorites => ({
  type: 'SET_DISPLAY_FAVORITES',
  payload: displayFavorites
});

export const receivedFavorites = favorites => ({
  type: 'RECEIVED_FAVORITES',
  payload: favorites
});

export const errorFavorites = err => ({
  type: 'REQUEST_FAVORITES_ERROR',
  error: err
});

export const checkFavoriteStatus = (user_id, type, favorite_id) => ({
  type: 'CHECK_FAVORITE_STATUS'
});

export const updateFavoriteStatus = favoriteStatus => ({
  type: 'UPDATE_FAVORITE_STATUS',
  payload: favoriteStatus
});

export const addFavorite = (user_id, type, favorite_id) => ({
  type: 'ADD_FAVORITE',
  payload: { user_id, type, favorite_id }
});

export const deleteFavorite = (user_id, type, favorite_id) => ({
  type: 'DELETE_FAVORITE'
});

export const fetchFavorites = user_id => (
  (dispatch) => {
    dispatch(getFavorites());
    axios.get('/api/favorites/' + user_id)
      .then((response) => {
        dispatch(receivedFavorites(response.data));
      })
      .catch((err) => {
        dispatch(errorFavorites(err));
      });
  }
);

export const insertFavorite = (user_id, type, favorite_id) => (
  (dispatch) => {
    axios.post('/api/favorites', { user_id, type, favorite_id })
      .then((response) => {
        dispatch(addFavorite(user_id, type, favorite_id));
        console.log('Favorite added');
      })
      .catch((err) => {
        console.log('ERROR adding favorite: ', err);
      });
  }
);

export const removeFavorite = (user_id, type, favorite_id) => (
  (dispatch) => {
    axios.delete('/api/favorites', { params: { user_id, type, favorite_id } })
      .then((response) => {
        dispatch(deleteFavorite())
        console.log('Favorite DELETED');
      })
      .catch((err) => {
        console.log('ERROR DELETING favorite');
      });
  }
);

export const verifyFavoriteStatus = (user_id, type, favorite_id) => (
  (dispatch) => {
    axios.get('/api/favorite', { params: {user_id, type, favorite_id } })
      .then((response) => {
        dispatch(updateFavoriteStatus(!!response.data.length));
      })
      .catch((err) => {
        console.log('ERROR checking favorite status: ', err);
      });
  }
);
