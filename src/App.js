import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <span className="App-logo">
            <img src={logo} alt="logo" />
          </span>
          <span className="App-menu">
            <a href="#">Home</a>
            <a href="#" >Hobbies</a>
            <a href="#">Fears</a>
            <a href="#">Contact</a>
          </span>

      </header>
    </div>
  );
}

export default App;
