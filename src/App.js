import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Would you like to play a game?</h2>
        </div>
        <p className="App-intro">
          Guess the number I&rsquo;m thinking of.
        </p>
        <Game />
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <p>{this.state.targetNumber} {this.maxGuessableNumber}</p>
        <button className="Game--GuessButton">1</button>
      </div>
    )
  }

  constructor(props) {
    super(props);

    const maxGuessableNumber = 10;

    this.maxGuessableNumber = maxGuessableNumber;

    const target = Math.floor(Math.random() * maxGuessableNumber);
    this.state = {
      targetNumber: target + 1,
      playing: true
    }
  }
}

export default App;
