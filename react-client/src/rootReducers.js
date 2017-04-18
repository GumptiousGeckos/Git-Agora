import { combineReducers } from 'redux';

import navReducer from './NavBar/navReducer';
import projectReducer from './ProjectIdeas/projectReducer';
import newsReducer from './NewsPage/newsReducer';
import homepageReducer from './HomePage/homepageReducer';
import createProjectReducer from './CreateProject/createProjectReducer';
import userReducer from './Users/userReducer';

const appReducer = combineReducers({
  // all reducers in project
  userProfile: userReducer,
  homepage: homepageReducer,
  projects: projectReducer,
  navBar: navReducer,
  news: newsReducer,
  createproject: createProjectReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
