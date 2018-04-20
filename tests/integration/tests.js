var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

  it('should have a working + operator', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8');
  })

   it('should have a working - operator', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number1')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('9');
   })

   it('should have a working * operator', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_multiply')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('20');
   })

   it('should have a working / operator', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('5');
   })

   it('should be able to chain multiple operations', function(){
     running_total = element(by.css('#running_total'))
     element(by.css("#number5")).click();
     element(by.css('#operator_multiply')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_multiply')).click();
     element(by.css("#number5")).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number2')).click();
     element(by.css('#operator_add')).click();
     element(by.css("#number5")).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('20');
   })

   it('should return a negative if minus more than value', function(){
     running_total = element(by.css('#running_total'))
     element(by.css("#number9")).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('-1');
   })

   it('should return a negtive if you * a negative number', function(){
     running_total = element(by.css('#running_total'))
     element(by.css("#number9")).click();
     element(by.css('#operator_subtract')).click();
     element(by.css('#number1')).click();
     element(by.css('#number0')).click();
     element(by.css('#operator_equals')).click();
     element(by.css('#operator_multiply')).click();
     element(by.css("#number5")).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('-5');
   })

   it('should return a decimal value', function(){
     running_total = element(by.css('#running_total'))
     element(by.css("#number8")).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number5')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('1.6');
   })

   it('should be able to deal with very large numbers', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number8')).click();
     element(by.css('#number5')).click();
     element(by.css('#number6')).click();
     element(by.css('#number7')).click();
     element(by.css('#operator_multiply')).click();
     element(by.css('#number2')).click();
     element(by.css('#number3')).click();
     element(by.css('#number4')).click();
     element(by.css('#number5')).click();
     element(by.css('#operator_equals')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('20089615');
   })

   // - If you divide by zero, what is the effect?
   // If you divide 6 by zero, then you are asking the question, "What number times zero gives 6?" The answer is no number, for we know that zero times any real number is zero. So division by zero is undefined.


   // - Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
   // I personaly belive that returing infinity when a number is divided by zero is correct but for the purposes of this exercise, I think returning 0 would be more helpful for a user.

   it('should return 0 when any number is divided by 0', function(){
     running_total = element(by.css('#running_total'))
     element(by.css('#number6')).click();
     element(by.css('#operator_divide')).click();
     element(by.css('#number0')).click();
     expect(running_total.getAttribute('value')).to.eventually.equal('0');
   })

   //I have now updated the code so that if a number is divided by zero the calculator returns zero rather than infinity



});
