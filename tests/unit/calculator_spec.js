var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add', function(){
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("+");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.equal(25, calculator.runningTotal);
  })

  //in read me there is a list of unit tests it needs to run
  //run these tests with npm test
  // - calculator.subtract()
  // - calculator.multiply()
  // - calculator.divide()
  // - calculator.numberClick()
  // - calculator.operatorClick()
  // - calculator.clearClick()

  it('can subtract', function(){
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.numberClick(0);
    calculator.operatorClick("=");
    assert.equal(30, calculator.runningTotal);
  });

  it('can multiply', function(){
    calculator.clearClick();
    calculator.numberClick(5);
    calculator.numberClick(0);
    calculator.operatorClick("*");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(100, calculator.runningTotal);
  });

  it('can divide', function(){
    calculator.clearClick();
    calculator.numberClick(7);
    calculator.numberClick(0);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.equal(10, calculator.runningTotal);
  });

  it('can check can handle decimals', function(){
    calculator.clearClick();
    calculator.numberClick(7);
    calculator.operatorClick("/");
    calculator.numberClick(2);
    calculator.operatorClick("=");
    assert.equal(3.5, calculator.runningTotal);
  })

  it('can check number click', function(){
      calculator.numberClick(7);
      assert.equal(7, calculator.runningTotal);
  })

  it('can check clear screen', function(){
    calculator.numberClick(7);
    calculator.clearClick();
    assert.equal(0, calculator.runningTotal);
  })

  // the operators have been checked whilst doing the add, subtract, divide and multiply functions

  it('can handle large numbers', function(){
    calculator.numberClick(3);
    calculator.numberClick(5);
    calculator.numberClick(6);
    calculator.numberClick(7);
    calculator.numberClick(8);
    calculator.numberClick(8);
    calculator.numberClick(8);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick('=')
    assert.equal(10703664, calculator.runningTotal);
  })


});
