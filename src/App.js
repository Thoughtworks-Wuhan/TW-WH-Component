import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './component/Alert/index'
import AdvancedSearch from './component/AdvanceSearch/AdvancedSearch';
import MultipleSelect from './component/MultipleSelect/MultipleSelect';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnName: 'click me'
        };
    }

    btnClick = (e) => {
        console.log(e);
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
                <Alert name="Hello"/>
                <div className="multiple-select">
                    <MultipleSelect items={['item1', 'item2', 'item3', 'item4', 'item5']} placeholder="please select"/>
                </div>
                {/*<AdvancedSearch />*/}
            </div>
        );
    }
}

export default App;
