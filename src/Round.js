const Turn = require('../src/Turn');

class Round{
  constructor(deck){
    this.deck = deck;
    this.currentCard = deck.deck[0];
    this.turn = 0;
    this.incorrectGuesses = [];
  };

  returnCurrentCard(){
    return this.currentCard
  };

  takeTurn(guess){
    const turn = new Turn(guess, this.currentCard)
    turn.evaluateGuess()
    if (turn.evaluateGuess() === false){
      this.incorrectGuesses.push(this.currentCard.id)
    };

    this.turn +=1;
    this.currentCard = this.deck.deck[this.turn];
    return turn.giveFeedback()
  };
};

module.exports = Round;
