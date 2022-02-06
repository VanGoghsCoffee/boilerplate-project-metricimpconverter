function ConvertHandler() {

  const divideInputRegEx = /[a-z]+|[^a-z]+/gi;
  const isNumberRegex = /\d/;
  const unitLookup = {
    gal: {
      unit: 'gal',
      returnUnit: 'L',
      spelledOut: 'gallons'
    },
    l: {
      unit: 'L',
      returnUnit: 'gal',
      spelledOut: 'liters'
    },
    mi: {
      unit: 'mi',
      returnUnit: 'km',
      spelledOut: 'miles'
    },
    km: {
      unit: 'km',
      returnUnit: 'mi',
      spelledOut: 'kilometers'
    },
    lbs: {
      unit: 'lbs',
      returnUnit: 'kg',
      spelledOut: 'pounds'
    },
    kg: {
      unit: 'kg',
      returnUnit: 'lbs',
      spelledOut: 'kilograms'
    }
  }
  
  this.getNum = function(input) {
    let result = input.match(divideInputRegEx)[0];

    const fractional = result.split('/');
    if (fractional.length > 2) {
      return 'invalid number';
    }
    else if (fractional.length > 1) {
      result = Number(fractional[0]) / Number(fractional[1]);
    }

    if (isNumberRegex.test(result) === false)
      result = 1;

    return Number(result);
  };
  
  this.getUnit = function(input) {

    let inputArray = input.toLowerCase().match(divideInputRegEx);
    let unit = inputArray[0];
    if (inputArray.length > 1) {
      unit = inputArray[1];
    }

    let result = 'invalid unit';
    if (Object.keys(unitLookup).indexOf(unit) >= 0) {
      result = unitLookup[unit].unit;
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {

    return unitLookup[initUnit.toLowerCase()].returnUnit;
  };

  this.spellOutUnit = function(unit) {

    return unitLookup[unit.toLowerCase()].spelledOut;
  };
  
  this.convert = function(initNum, initUnit) {

    const num = this.getNum(initNum);
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
