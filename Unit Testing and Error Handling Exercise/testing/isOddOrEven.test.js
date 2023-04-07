const { assert } = require('chai');
const isOddOrEven = require('./isOddOrEven');

describe('isOddOrEven function tests', () => {
    //invalid input tests
    it('should return undefined if parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });
    it('should return undefined if parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined if parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return undefined if parameter is undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });
    it('should return undefined if parameter is null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });
    //valud input tests
    it('should return even', () => {
        assert.equal(isOddOrEven('Hi'),'even');
    });
    it('should return odd', () => {
        assert.equal(isOddOrEven('Hello'),'odd');
    });
});
