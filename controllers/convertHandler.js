/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  const getValidNum = (input) => {
    const match = input.match(/[0-9/.]+/g);
    if (match) {
      return match[0];
    }
    return null;
  };
  
  const getUnitFromInput = (input) => input.match(/[A-Za-z]+/g).pop();
  
  const getNumFromValidNum = (input) => {
    const matches = input.match(/^([0-9]+(\.[0-9]+)?)(\/[0-9]+(\.[0-9]+)?)?$/);
    let result = null;
    if (matches) {
      result = [matches[0], matches[1], matches[3]];
    }
    return result;
  };
  
  this.getNum = function(input) {
    const validNum = getValidNum(input);
    
    if (!validNum) {
      return 1;
    }
    
    const matches = getNumFromValidNum(validNum);
    
    if (!matches) {
      return 'invalid number';
    }
    
    if (matches[2] && matches[1]) {
      const [num1, num2] = [matches[1], matches[2].slice(1, )];
      return Number.parseFloat(num1) / Number.parseFloat(num2);
    }
    
    return Number.parseFloat(matches[0]);
  };


  
  this.getUnit = function(input) {
    const units = ['gal','l','mi','km','lbs','kg'];
    
    const match = getUnitFromInput(input);
    
    if (!match) {
      return 'invalid unit';
    }
    
    if (units.includes(match.toLowerCase())) {
      return match.toLowerCase();
    }
    
    return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    const unitPairs = {
      gal  :  'l',
      l    :  'gal',
      mi   :  'km',
      km   :  'mi',
      lbs  :  'kg',
      kg   :  'lbs'
    };
    
    const result = unitPairs[initUnit];
    return (result) ? result : 'invalid unit';
  };

  this.spellOutUnit = function(unit) {
    const unitAbvr = {
      'gal'   :  'gallons',
      'l'     :  'litres',
      'mi'    :  'miles',
      'km'    :  'kilometers',
      'lbs'   :  'pounds',
      'kg'    :  'kilograms'
    };
    
    const result = unitAbvr[unit];
    return (result) ? result : 'invalid unit';
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    switch (initUnit) {
      case 'gal': {
        return initNum * galToL;
      }
      case 'l': {
        return initNum / galToL;
      }
      case 'mi': {
        return initNum * miToKm;
      }
      case 'km': {
        return initNum / miToKm;
      }
      case 'lbs': {
        return initNum * lbsToKg;
      }
      case 'kg': {
        return initNum / lbsToKg;
      }
      default: {
        return '';
      }
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      return 'invalid number and unit';
    }
    
    if (initNum === 'invalid number') {
      return 'invalid number';
    }
    
    if (initUnit === 'invalid unit') {
      return 'invalid unit';
    }
    
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
  };
  
}

module.exports = ConvertHandler;
