const { expect } = require('chai');
const isSymmetric = require('./isSymmetric');

describe('Symmetri checker', function() {
    it('return the true for symmetrics array', () => {
        const arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('returns false non-symmetrics array', () => {
        const arr = [1, 2, 3];
        expect(isSymmetric(arr)).to.be.false;
    });

    it('return false with no array arguments', () => {
        const data = 121;
        expect(isSymmetric(data)).to.be.false;
    });

    it('returns true when length is odd', () => {
        const arr = [1, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('return false for array-like arguments', () => {
        let data = '12221';
        expect(isSymmetric(data)).to.be.false;
    })

    it('return number with string', () => {
        let arr = [1, 2, '1'];
        expect(isSymmetric(arr)).to.be.false;
    })
});