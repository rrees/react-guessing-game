import React, { Component } from 'react';
import './App.css';

import Game from './game';

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
        <GameDisplay />
      </div>
    );
  }
}

class GameDisplay extends Component {

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

      if(!state.playing && !state.won) {
        return "Sorry, you've lost...";
      }

      return `Looking for ${state.targetNumber} among 1 to ${state.maxGuessableNumber} with ${state.remainingGuesses} guesses left`;
    }

    return (
      <div className="Game">
        <p>{renderStrapline(this.state)}</p>
        <div>{renderButtons(this, this.state)}</div>

      </div>
    )
  }

  handleGuess(state, n) {
    this.setState(Game.handleGuess(state, n));
  }

  resetGame() {
    this.setState(Game.setup());
  }

  constructor(props) {
    super(props);

    this.state = Game.setup();
  }
}

export default App;
