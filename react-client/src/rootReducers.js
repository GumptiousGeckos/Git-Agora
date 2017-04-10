import { combineReducers } from 'redux';

import projectReducer from './ProjectIdeas/projectReducer';

const appReducer = combineReducers({
  // all reducers in project
  projectPosts: projectReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;