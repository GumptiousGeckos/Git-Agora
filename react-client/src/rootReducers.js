import { combineReducers } from 'redux';

import projectReducer from './ProjectIdeas/projectReducer';
import testReducer from './TestFeature/testReducer';

const appReducer = combineReducers({
  // all reducers in project
  testReducer,
  projects: projectReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;