class Turn {
  constructor (guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true; 
    } else {
      return false;
    }
  }

  giveFeedback() {
    if(this.evaluateGuess()) {
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }

};

module.exports = Turn;

// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.
