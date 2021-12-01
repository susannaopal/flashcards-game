const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    // console.log("DECK -----", deck)
    this.currentCard = deck.deck[0];
    // console.log("current CARD ----", deck.deck[0])
    this.turnsCounter = 0;
  };

  returnCard() {
    return this.currentCard;
  };

  takeTurn() {
    const turn = new Turn()
    this.turnsCounter += 1;

  };


};

module.exports = Round;
