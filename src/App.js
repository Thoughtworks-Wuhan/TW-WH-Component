import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './component/alert/index'

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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <input type="button" value={this.state.btnName} onClick={this.btnClick} />
        <Alert name="Hello"/>
      </div>
    );
  }
}

export default App;
