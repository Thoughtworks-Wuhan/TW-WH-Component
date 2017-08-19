import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import createHistory from 'history/createBrowserHistory'

import data from '../reducers/index';

export const history = createHistory();
// const middleware = routerMiddleware(history);

const composeEnhancers = composeWithDevTools({});

export const store = createStore(
    combineReducers({
        data,
        router: routerReducer
    }),
    composeEnhancers(
        applyMiddleware(logger),
        // other store enhancers if any
    )
);