import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      number: "",
      message: ""
    }
  }

  isPrime(event) {
    let num = parseInt(event.target.value);
    let msg;

    if (num >= 2) {
      if (num == 2) {
        msg = "Is Prime"
      }else{
        let prime = true;
        for (let i = 2; i < num; i++){
          if (num % i == 0) {
            prime = false;
            break;
          }
        }

        if (prime) {
          msg = "Is Prime"
        }else{
          msg = "Not prime"
        }
      }
    }else{
      msg = "Not prime"
    }

    this.setState({
      number: num,
      message: msg,
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img className="logo" src={logo} alt="findmypast-logo" />
        </header>

        <div className="App-body">
          <h1 className="center">Prime Number Table Generator</h1>
          <div className="inputDiv">
            <h2>Enter Number</h2>
            <input type="number" value={this.state.number} onChange={this.isPrime.bind(this)} />
            <p>{this.state.message}</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
