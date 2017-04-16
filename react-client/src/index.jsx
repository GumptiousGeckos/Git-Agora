import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('app'));
