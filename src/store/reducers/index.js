import { combineReducers } from 'redux'
import user from './app_reducer'
import thunk from 'redux-thunk';

export default combineReducers({ 
    login: user 
 })