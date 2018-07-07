import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import search from './reducers/search';
import activity from './reducers/activity';

const rootReducer = combineReducers({search, activity});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));