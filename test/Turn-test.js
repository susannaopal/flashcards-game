const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


// Your Turn class should meet the following requirements:
// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedb

describe ('Turn', function() {
  let turn;
  let card;

  beforeEach(function () {
    card = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")

    turn = new Turn("iteration method", card)
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate a new instance of Turn', function () {
    expect(turn).to.be.an.instanceof(Turn)
  });
    

});

