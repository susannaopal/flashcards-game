class Round {
  constructor(deck) {
//returning as UNDEFINED WHY?!
    this.deck = deck;
    // console.log("DECK -----", deck)
    this.currentCard = deck.deck[0];
    // console.log("current CARD ----", deck.deck[0])
  };

  returnCard() {
    return this.currentCard;
  }
};

module.exports = Round;
