import { combineReducers } from 'redux';

import page from './Page';
import hexCode from './HexCode';
import auth from './Auth';
import proxy from './Proxy';

export default combineReducers({
  page,
  hexCode,
  auth,
  proxy
});