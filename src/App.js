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

    function renderButtons(component, state) {
      if(state.playing) {
        return state.guessableNumbers.map((n) => {
          const disabled = state.guessedNumbers.includes(n) ? "disabled": "";
          return <button key={n.toString()} className="Game--GuessButton" disabled={disabled} onClick={(e) => component.handleGuess(state, n)}>{n.toString()}</button>
        });
      }

      return <button onClick={(e) => component.resetGame()}>Play again</button>
    }

    function renderStrapline(state) {
      if(state.won) {
        return "Congratulations, you won";
      }

      return `Looking for ${state.targetNumber} among 1 to ${state.maxGuessableNumber}`;
    }

    return (
      <div className="Game">
        <p>{renderStrapline(this.state)}</p>
        <div>{renderButtons(this, this.state)}</div>

      </div>
    )
  }

  handleGuess(state, n) {

    const stateUpdate = {
      guessedNumbers: state.guessedNumbers.concat([n])
    };

    if( n === state.targetNumber) {
      Object.assign(stateUpdate, {
        won: true,
        playing: false
      });
    }

    this.setState(stateUpdate);
  }

  resetGame() {
    this.setState(this.setupGame());
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
