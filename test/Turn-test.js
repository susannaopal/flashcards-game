const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe ('Turn', function() {
  let turn;
  let card;

  beforeEach(function () {
    card = new Card(5, "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?", ["mutator method", "accessor method", "iteration method"], "iteration method")

    turn = new Turn("iteration method", card);
    turn2 = new Turn("object", card)
  })

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate a new instance of Turn', function () {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to have a guess', function() {
    expect(turn.guess).to.equal("iteration method");
  });
    
  it('should have a card', function() {
    expect(turn.card).to.equal(card);
  });

  it('should return a guess', function() {
    expect(turn.returnGuess()).to.equal("iteration method");
  });

  it('should return a card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should be able to evaluate a guess', function() {
    expect(turn.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);

  });

});

