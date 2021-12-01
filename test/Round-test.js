const chai = require('chai');
const expect = chai.expect;
// const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {
  // let turn;
  let deck;
  let round;
  let card1;
  let card2;
  let card3;

  beforeEach(function () {
  card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
  card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"],  "array");
  card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
  deck = new Deck([card1, card2, card3]);
  round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should instantiate a new instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

it('should have a current card', function() {
  expect(round.currentCard).to.equal(card1)
  });

it('should return a current card', function() {
  expect(round.returnCard()).to.equal(card1)
});

});
