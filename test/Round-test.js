const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  let deck;
  let round;
  let card1;
  let card2;
  let card3;

  beforeEach(function () {
    card1 = new Card(1, "What allows you to define a set of related information using key-  value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"],  "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should instiate a new instance of round', function () {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should have a current card', function () {
    expect(round.currentCard).to.equal(card1);
  });

  it('should return a current card', function () {
    expect(round.deck).to.deep.equal(deck);
  });

  it('keeps track of number of turns', function () {
    expect(round.turn).to.equal(0);
    round.takeTurn();
    expect(round.turn).to.equal(1);
  });

  it('should go onto the next card', function () {
    expect(round.currentCard).to.equal(card1);
    round.takeTurn();
    expect(round.currentCard).to.equal(card2);
  });

  it('should record incorrect guesses', function () {
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn();
    expect(round.incorrectGuesses).to.deep.equal([card1.id]);
  });

  it('should return feedback', function () {
    expect(round.takeTurn("function")).to.equal("Incorrect!");
    expect(round.takeTurn("array")).to.equal("Correct!");
  });

  it('should calculate the percentage of correct guesses', function () {
    expect(round.calculatePercentCorrect()).to.be.a("number");
    round.takeTurn("function");
    round.takeTurn("array");
    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should end the current round', function () {
    round.takeTurn("function");
    round.takeTurn("array");
    expect(round.endRound()).to.equal(`** Round over! ** You answered 50% of the questions correctly!`);
  });
});
