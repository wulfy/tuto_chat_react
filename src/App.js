import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/chatComponent';
import Status from './components/connexionStatusComponent';

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
            CHAT <Status/>
          </p>
          <Chat/>
        </header>
      </div>
    );
  }
}

export default App;
