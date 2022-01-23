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

});