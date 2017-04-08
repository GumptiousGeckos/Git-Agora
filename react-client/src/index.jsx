import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'));