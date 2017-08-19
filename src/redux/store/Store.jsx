import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'



import data from '../reducers/index';

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    combineReducers({
        data,
        routing: routerReducer
    }),
    composeEnhancers(
        applyMiddleware(logger),
        // other store enhancers if any
    )
);