function ConvertHandler() {

  const divideInputRegEx = /[a-z]+|[^a-z]+/gi;
  const isNumberRegex = /\d/;
  const unitLookup = {
    gal: {
      unit: 'gal',
      returnUnit: 'L',
      spelledOut: 'gallons',
      conversionToReturnUnit: 3.78541
    },
    l: {
      unit: 'L',
      returnUnit: 'gal',
      spelledOut: 'liters',
      conversionToReturnUnit: 1/3.78541
    },
    mi: {
      unit: 'mi',
      returnUnit: 'km',
      spelledOut: 'miles',
      conversionToReturnUnit: 1.60934
    },
    km: {
      unit: 'km',
      returnUnit: 'mi',
      spelledOut: 'kilometers',
      conversionToReturnUnit: 1/1.60934
    },
    lbs: {
      unit: 'lbs',
      returnUnit: 'kg',
      spelledOut: 'pounds',
      conversionToReturnUnit: 0.453592
    },
    kg: {
      unit: 'kg',
      returnUnit: 'lbs',
      spelledOut: 'kilograms',
      conversionToReturnUnit: 1/0.453592
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

    return (initNum * unitLookup[initUnit].conversionToReturnUnit).toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
