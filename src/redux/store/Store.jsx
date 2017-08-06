import {createStore, combineReducers} from 'redux';
import rootReducer from '../reducers/index';
const store = createStore(
    combineReducers(rootReducer),
);

export default store;