function ConvertHandler() {

  const divideIputRegEx = /[a-z]+|[^a-z]+/gi;
  const isNumberRegex = /\d/;
  const unitRegEx = /^((?!gal|l|mi|km|lbs|kg).)*$/gi;
  
  this.getNum = function(input) {
    let result = input.match(divideIputRegEx)[0];

    const fractional = result.split('/');
    if (fractional.length > 2) {
      return 'invalid number';
    }
    else if (fractional.length > 1) {
      result = Number(fractional[0]) / Number(fractional[1]);
    }

    if (isNumberRegex.test(result) == false)
      result = 1;

    return Number(result);
  };
  
  this.getUnit = function(input) {  
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
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
