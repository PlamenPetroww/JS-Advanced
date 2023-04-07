const {expect} = require('chai');
const sum = require('./app.js')

describe('Main test', function() {
    it('works with whole numbers', function() {
        expect(sum(3, 5)).to.equal(8);
    });

    it('works with floating-point numbers', function() {
        expect(sum(0.1, 0.2)).to.closeTo(0.3, 0.0000005)
    });

    it('throws with non-number parameters', () => {
        expect(() => sum('a', 'b')).to.throw(TypeError)
    });
});