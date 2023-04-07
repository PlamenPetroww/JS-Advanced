const { expect } = require('chai');
const { describe } = require('mocha');
const createCalculator = require('./calc');

describe('Calculator', function () {
    let calc = null;

    beforeEach(() => {
        calc = createCalculator();
    });

    it('returns zero initial value', () => {
        expect(calc.get()).to.equal(0);
    });

    describe('number arguments', () => {


        it('can add move than one number', () => {
            calc.add(1);
            calc.add(1);
            expect(calc.get()).to.equal(2);
        });

        it('can subtract numbers', () => {
            calc.subtract(1);
            expect(calc.get()).to.equal(-1);
        });

        it('cann add und subtract', () => {
            calc.add(2);
            calc.subtract(1);
            expect(calc.get()).to.equal(1);
        });

        it('can add numbers', () => {
            calc.add(1);
            expect(calc.get()).to.equal(1);
        });
    });

    describe('string arguments', () => {
        it('can add numerbs as strings', () => {
            calc.add('1');
            expect(calc.get()).to.equal(1);
        });

        it('can subtract number as string', () => {
            calc.subtract('1');
            expect(calc.get()).to.equal(-1);
        });
    });

    describe('test overload', () => {
        it('overload 1', () => {
            calc.add(23);
            expect(calc.get()).to.equal(23);
        });

        it('overload 2', () => {
            calc.add(54);
            calc.subtract(51);
            expect(calc.get()).to.equal(3);
        })
    });
})