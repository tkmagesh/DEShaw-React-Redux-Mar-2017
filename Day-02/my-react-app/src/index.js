import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import BugTracker from './BugTracker';
import bugsReducer from './reducers/bugsReducer';
import employeesReducer  from './reducers/employeesReducer';

let combinedReducers = combineReducers({bugs : bugsReducer, employees : employeesReducer})

let store = createStore(combinedReducers);

ReactDOM.render(
  <Provider store={store}>
  	<BugTracker></BugTracker>
  </Provider>,
  document.getElementById('root')
);
