import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

import './sass/style.scss';

const createStoreWithMiddleware = applyMiddleware(logger(), promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App/>
  </Provider>, document.querySelector('#app')
);
