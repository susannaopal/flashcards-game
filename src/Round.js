const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.deck[0];
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard)
    turn.evaluateGuess()
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.turn += 1;
    this.currentCard = this.deck.deck[this.turn];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const guessesTotal = this.turn;
    const totalCorrect = guessesTotal - this.incorrectGuesses.length;
    return (totalCorrect / guessesTotal) * 100;
  }

  endRound() {
    //console log statement left in per my understanding of the project spec to print message to console
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
