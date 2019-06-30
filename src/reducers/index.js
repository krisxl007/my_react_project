import { combineReducers } from 'redux';
import fetchCommentsReducer from './fetchCommentsReducer'

// this is a combined reducer
export default combineReducers({
    getComments : fetchCommentsReducer
})