import { combineReducers } from 'redux';

import TYPE from "./../Types/App";

import page from './Page';
import hexCode from './HexCode';
import auth from './Auth';
import proxy from './Proxy';


// Combine all reducers.
const appReducer = combineReducers({
  page,
  hexCode,
  auth,
  proxy
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === TYPE.SET_STORE) {
    return appReducer(action.payload, action);
  } else {
    return appReducer(state, action);
  }
};

export default rootReducer;