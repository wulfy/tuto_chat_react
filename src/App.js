import React, { Component } from 'react';
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
        <Status/>
          <Chat/>
      </div>
    );
  }
}

export default App;
