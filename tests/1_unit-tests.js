const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

    test('convertHandler should correctly read a whole number input.', () => {
        const input = '18gal';
        assert.equal(convertHandler.getNum(input), 18);
    });

    test('convertHandler should correctly read a decimal number input.', () => {
        const input = '1.8gal';
        assert.equal(convertHandler.getNum(input), 1.8);
    });

    test('convertHandler should correctly read a fractional input.', () => {
        const input = '1/8gal';
        assert.equal(convertHandler.getNum(input), 1 / 8);
    });

    test('convertHandler should correctly read a fractional input with a decimal.', () => {
        const input = '1.8/8gal';
        assert.equal(convertHandler.getNum(input), 1.8/8);
    });

    test('convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3)', () => {
        const input = '3/2/3gal';
        assert.equal(convertHandler.getNum(input), 'invalid number');
    });

    test('convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
        const input = 'L';
        assert.equal(convertHandler.getNum(input), 1);
    });

    test('convertHandler should correctly read each valid input unit.', () => {
        const validUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
        const validInputs = ['1.8gal', '33.1L', '1.0mi', '2.1km', '18lbs', '1000kg'];

        const resultUnits = validUnits.map(convertHandler.getUnit);
        const resultOutputs = validInputs.map(convertHandler.getUnit);

        assert.deepEqual(resultUnits, validUnits);
        assert.deepEqual(resultOutputs, validUnits);
    });

    test('convertHandler should correctly return an error for an invalid input unit.', () => {

        const input = '3/2/3gall';
        assert.equal(convertHandler.getUnit(input), 'invalid unit');
    });

    test('convertHandler should return the correct return unit for each valid input unit.', () => {

        const inputUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
        const expectedOutputUnits = ['L', 'gal', 'km', 'mi', 'kg', 'lbs'];

        const resultUnits = inputUnits.map(convertHandler.getReturnUnit);

        assert.deepEqual(resultUnits, expectedOutputUnits);
    });

    test('convertHandler should correctly return the spelled-out string unit for each valid input unit.', () => {

        const inputUnits = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
        const expectedSpelledOutValues = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];

        const resultSpelledOutValues = inputUnits.map(convertHandler.spellOutUnit);

        assert.deepEqual(resultSpelledOutValues, expectedSpelledOutValues);
    });
});