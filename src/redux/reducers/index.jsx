import { combineReducers } from 'redux';
import itemReducer from '../module/reducer';

const data = combineReducers({
    item: itemReducer
});

export default { data };