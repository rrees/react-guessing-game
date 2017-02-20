
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

export default {
  setup: setup
}
