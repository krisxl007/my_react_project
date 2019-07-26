import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '@/reducers/index'

const initialState = {};
const middleware = [thunk];

// create a redux store with given reducer/initialState/middleWare
export const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));