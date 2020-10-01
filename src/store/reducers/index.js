import { combineReducers } from 'redux'
import favoritePituresState from './app_reducer'
import thunk from 'redux-thunk';

export default combineReducers({ 
    login: favoritePituresState 
 })