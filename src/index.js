import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from "./epics/index";

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(reducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
