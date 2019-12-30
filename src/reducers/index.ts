import { combineReducers } from 'redux'
import auth from './auth';
import orgs from './orgs';
import tours from './tours';
export default combineReducers({
  auth, tours, orgs
})