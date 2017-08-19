import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Alert from './component/Alert/index'
import MultipleSelect from './component/MultipleSelect/MultipleSelect'
import { GetItems } from './redux/module/action';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnName: 'click me'
        };
    }

    btnClick = (e) => {
        const items = ['redux-item1', 'redux-item2', 'redux-item3', 'redux-item4', 'redux-item5',];
        this.props.GetItems(items);
    };

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <input type="button" value={this.state.btnName} onClick={this.btnClick}/>
                <Link to="/multipleSelect">
                    <h2>go to multiple-select page</h2>
                </Link>
                <Alert name="Hello"/>
                <div className="multiple-select">
                    <MultipleSelect items={['item1', 'item2', 'item3', 'item4', 'item5']} placeholder="please select"/>
                </div>
                {/*<div className="multiple-select" style={{ marginTop: '5em' }}>
                    <MultipleSelectUseRedux />
                </div>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return Object.assign({ items: state.data });
};

export default connect(mapStateToProps, { GetItems })(App);