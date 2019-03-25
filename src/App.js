import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/messageComponent'

class App extends Component {

  handleClick = (e) => 
  {
    e.preventDefault();

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            CHAT
          </p>
          <Message/>
        </header>
      </div>
    );
  }
}

export default App;
