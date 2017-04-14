import { combineReducers } from 'redux';

import navReducer from './NavBar/navReducer';
import projectReducer from './ProjectIdeas/projectReducer';
import newsReducer from './NewsPage/newsReducer';
import homepageReducer from './HomePage/homepageReducer';
import repoListReducer from './RepoList/repoListReducer';

const appReducer = combineReducers({
  // all reducers in project
  homepage: homepageReducer,
  projects: projectReducer,
  activeTab: navReducer,
  news: newsReducer,
  repos: repoListReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
