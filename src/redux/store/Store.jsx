import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';


import data from '../reducers/index';

const composeEnhancers = composeWithDevTools({});
const store = createStore(
    combineReducers({
        data,
        routing: routerReducer,
    }),
    composeEnhancers(
        applyMiddleware(logger),
        // other store enhancers if any
    ),
);
export default store;
