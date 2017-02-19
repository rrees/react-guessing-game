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
    const buttons = this.guessableNumbers.map((n) =>
      <button key={n.toString()} className="Game--GuessButton"  onClick={(e) => this.handleGuess(n)}>{n.toString()}</button>
    );

    function generateStrapline(state, maxGuessableNumber) {
      if(state.won) {
        return "Congratulations, you won";
      }

      return `Looking for ${state.targetNumber} among 1 to ${maxGuessableNumber}`;
    }

    const strapline = generateStrapline(this.state, this.maxGuessableNumber);


    return (
      <div className="Game">
        <p>{strapline}</p>
        <div>{buttons}</div>

      </div>
    )
  }

  handleGuess(n) {
    console.log(n);
    if( n === this.state.targetNumber) {
      this.setState({
        won: true,
        playing: false
      })
    }

    this.state.guessedNumbers.push(n);
  }

  setupGame() {
    const maxGuessableNumber = 10;

    this.maxGuessableNumber = maxGuessableNumber;
    this.guessableNumbers = Array(maxGuessableNumber).fill().map((_, i) => 1 + i);

    const target = Math.floor(Math.random() * maxGuessableNumber);
    this.state = {
      targetNumber: target + 1,
      playing: true,
      guessedNumbers: []
    }
  }

  constructor(props) {
    super(props);

    this.setupGame();
  }
}

export default App;
