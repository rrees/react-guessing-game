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
    const buttons = this.state.guessableNumbers.map((n) => {
      const disabled = this.state.guessedNumbers.includes(n) ? "disabled": "";
      return <button key={n.toString()} className="Game--GuessButton" disabled={disabled} onClick={(e) => this.handleGuess(n)}>{n.toString()}</button>
    }
    );

    function renderStrapline(state) {
      if(state.won) {
        return "Congratulations, you won";
      }

      return `Looking for ${state.targetNumber} among 1 to ${state.maxGuessableNumber}`;
    }

    return (
      <div className="Game">
        <p>{renderStrapline(this.state)}</p>
        <div>{buttons}</div>

      </div>
    )
  }

  handleGuess(n) {

    const stateUpdate = {
      guessedNumbers: this.state.guessedNumbers.concat([n])
    };

    if( n === this.state.targetNumber) {
      Object.assign(stateUpdate, {
        won: true,
        playing: false
      });
    }

    this.setState(stateUpdate);
  }

  setupGame() {
    const maxGuessableNumber = 10;

    const target = Math.floor(Math.random() * maxGuessableNumber);

    return {
      maxGuessableNumber: maxGuessableNumber,
      guessableNumbers: Array(maxGuessableNumber).fill().map((_, i) => 1 + i),
      targetNumber: target + 1,
      playing: true,
      won: false,
      guessedNumbers: [],
    }
  }

  constructor(props) {
    super(props);

    this.state = this.setupGame();
  }
}

export default App;
