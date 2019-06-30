import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@/reducers/index'

const initialState = {};
const middleware = [thunk];

// create a redux store with given reducer/initialState/middleWare
export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));