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

class GameButtons extends Component {
  render() {
    const buttons = this.props.numbers.map((n) =>
      <button key={n.toString()} className="Game--GuessButton">{n.toString()}</button>
    );

    return (
      <div>{buttons}</div>
    )
  }
}

class Game extends Component {
  render() {
    return (
      <div className="Game">
        <p>Looking for {this.state.targetNumber} among 1 to {this.maxGuessableNumber}</p>
        <GameButtons numbers={this.guessableNumbers} />

      </div>
    )
  }

  constructor(props) {
    super(props);

    const maxGuessableNumber = 10;

    this.maxGuessableNumber = maxGuessableNumber;
    this.guessableNumbers = Array(maxGuessableNumber).fill().map((_, i) => 1 + i);

    const target = Math.floor(Math.random() * maxGuessableNumber);
    this.state = {
      targetNumber: target + 1,
      playing: true
    }
  }
}

export default App;
