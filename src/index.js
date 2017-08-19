import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import './index.css';
import { store, history } from './redux/store/Store';
import App from './App';
import MultipleSelectUseRedux from './component/MultipleSelect/MultipleSelectUseRedux';


ReactDOM.render(

    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/multipleSelect" component={MultipleSelectUseRedux}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
