import {createStore, combineReducers} from 'redux';
import search from './reducers/search';
import activity from './reducers/activity';

const rootReducer = combineReducers({search, activity});

export default createStore(rootReducer);