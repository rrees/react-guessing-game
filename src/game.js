
function setup() {
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

function handleGuess(state, n) {
    const stateUpdate = {
      guessedNumbers: state.guessedNumbers.concat([n])
    };

    if( n === state.targetNumber) {
      Object.assign(stateUpdate, {
        won: true,
        playing: false
      });
    }

    return stateUpdate;
  }

export default {
  setup: setup,
  handleGuess: handleGuess
}
