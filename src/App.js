import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      number: "",
      message: [],
    }
  }

  isPrime(event) {
    let num = parseInt(event.target.value);
    let primes = [];
    let isPrime = true;

    for(var i = 2; primes.length < num; i++) {
        isPrime = true;

        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime === true) {
            primes.push(i);
        }
    }

    console.log(primes)

    this.setState({
      number: num,
      message: primes.map((number =>
      <th>{number}</th>))
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
            <input className="input-box" type="number" value={this.state.number} onChange={(this.isPrime.bind(this))} />
            <br/><table>{this.state.message}</table>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
