import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createHistory from 'history/createHashHistory';
import './index.css';
import store from './redux/store/Store';
import App from './App';
import MultipleSelectUseRedux from './component/MultipleSelect/MultipleSelectUseRedux';

const history = createHistory();

ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/multipleSelect" component={MultipleSelectUseRedux} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'),
);
