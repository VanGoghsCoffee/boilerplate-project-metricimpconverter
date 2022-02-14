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

    test('convertHandler should correctly convert gal to L', () => {
        const inputUnit = 'gal';
        const inputNumber = 2.8;
        const expectedNumber = 10.59915;

        const result = convertHandler.convert(inputNumber, inputUnit);

        assert.equal(result, expectedNumber);
    });

    test('convertHandler should correctly convert L to gal', () => {
        const inputUnit = 'l';
        const inputNumber = 2.8;
        const expectedNumber = 0.73968;

        const result = convertHandler.convert(inputNumber, inputUnit);

        assert.equal(result, expectedNumber);
    });

    test('convertHandler should correctly convert mi to km', () => {
        const inputUnit = 'mi';
        const inputNumber = 2.8;
        const expectedNumber = 4.50615;

        const result = convertHandler.convert(inputNumber, inputUnit);

        assert.equal(result, expectedNumber);
    });

    test('convertHandler should correctly convert km to mi', () => {
        const inputUnit = 'km';
        const inputNumber = 2.8;
        const expectedNumber = 1.73984;

        const result = convertHandler.convert(inputNumber, inputUnit);

        assert.equal(result, expectedNumber);
    });

    test('convertHandler should correctly convert lbs to kg', () => {
        const inputUnit = 'lbs';
        const inputNumber = 2.8;
        const expectedNumber = 1.27006;

        const result = convertHandler.convert(inputNumber, inputUnit);

        assert.equal(result, expectedNumber);
    });

    test('convertHandler should correctly convert kg to lbs', () => {
        const inputUnit = 'kg';
        const inputNumber = 2.8;
        const expectedNumber = 6.17295;

        const result = convertHandler.convert(inputNumber, inputUnit);

        assert.equal(result, expectedNumber);
    });
});