import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducers from './rootReducers';

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(rootReducers, middleware);
