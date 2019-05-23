import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      appTitle: "Hello World",
      appMessage: "My very first app in React"
    };  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.appTitle}</h1>
          <p>
            {this.state.appMessage}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
