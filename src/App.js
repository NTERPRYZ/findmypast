import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={logo} alt="findmypast-logo" />
      </header>
      <div className="App-body">
        <h1 className="center">Prime Number Table Generator</h1>
        <div className="inputDiv">
          <h2>Enter Number</h2>
          <textarea></textarea>
          <button>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
