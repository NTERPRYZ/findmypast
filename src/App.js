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

    //
    for(var i = 2; primes.length < num; i++) {
        isPrime = true;

        // Additional step to speed up the ability to determain if a number is prime
        
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



    this.setState({
      number: num,
      message: primes.map((number =>
      <ul>{number}</ul>))
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
            <input type="number" value={this.state.number} onChange={(this.isPrime.bind(this))} />
            <br/>{this.state.message}
          </div>
        </div>

      </div>
    );
  }
}

export default App;
