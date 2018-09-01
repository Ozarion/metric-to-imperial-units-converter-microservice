/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.124L';
      assert.equal(convertHandler.getNum(input),32.124);
      done();
      //done();
    });
    
    test('Fractional Input', function(done) {
      var input = '32/16L';
      assert.equal(convertHandler.getNum(input),32/16);
      done();
      //done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '10.5/2.5L';
      assert.equal(convertHandler.getNum(input),(10.5/2.5));
      done();
      //done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '12//3L';
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
      //done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase());
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = ['maxin', 'jojs', '123asdv', 'ASD'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), 'invalid unit');
      });
      done();
      //done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','litres', 'miles', 'kilometers', 'pounds', 'kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [1, 'l'];
      var expected = 0.264172;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
      //done();
    });
    
    test('Mi to Km', function(done) {
      var input = [23.12, 'mi'];
      var expected = 37.208033;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
      
      //done();
    });
    
    test('Km to Mi', function(done) {
      var input = [37.208033, 'km'];
      var expected = 23.12;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
      
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [225, 'lbs'];
      var expected = 102.058;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
      
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [102.058, 'kg'];
      var expected = 225;
      assert.approximately(convertHandler.convert(input[0],input[1]), expected, 0.1);
      done();
      
      //done();
    });
    
  });

});