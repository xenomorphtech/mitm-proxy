import { combineReducers } from 'redux';

import page from './Page';
import hexCode from './HexCode';
import auth from './Auth';

export default combineReducers({
  page,
  hexCode,
  auth
});