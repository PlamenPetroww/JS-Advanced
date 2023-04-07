const {assert} = require('chai');
const mathEnforcer = require('../mathEnforcer');

describe('mathEnforcer tests', () => {

    //tests with incorrect input
    describe('add five', () => {
        it('Should return undefined with string ', () => {
            assert(mathEnforcer.addFive('TEST') === undefined);
        });
        it('Should return undefined with an object ', () => {
            assert(mathEnforcer.addFive({}) === undefined);
        });
        it('Should return undefined with an array ', () => {
            assert(mathEnforcer.addFive([]) === undefined);
        });
        it('Should return undefined with null ', () => {
            assert(mathEnforcer.addFive(null) === undefined);
        });
        it('Should return undefined with undefined ', () => {
            assert(mathEnforcer.addFive(undefined) === undefined);
        });
        it('Positive integer number + 5', () => {
            assert(mathEnforcer.addFive(5) === 10);
        });
        it('Negative integer number + 5', () => {
            assert(mathEnforcer.addFive(-5) === 0);
        });
        it('Decimal number + 5', () => {
            assert(mathEnforcer.addFive(5.5) === 10.5);
        });
    });

    //tests with correct input

    describe('subtract ten', () => {
        it('Should return undefined with string ', () => {
            assert(mathEnforcer.subtractTen('TEST') === undefined);
        });
        it('Should return undefined with an object ', () => {
            assert(mathEnforcer.subtractTen({}) === undefined);
        });
        it('Should return undefined with an array ', () => {
            assert(mathEnforcer.subtractTen([]) === undefined);
        });
        it('Should return undefined with null ', () => {
            assert(mathEnforcer.subtractTen(null) === undefined);
        });
        it('Should return undefined with undefined ', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined);
        });
        it('Positive integer number - 10', () => {
            assert(mathEnforcer.subtractTen(5) === -5);
        });
        it('Negative integer number - 10', () => {
            assert(mathEnforcer.subtractTen(10) === 0);
        });
        it('Decimal number - 10', () => {
            assert(mathEnforcer.subtractTen(15.5) === 5.5);
        });
    });

    describe('sum of two numbers', () => {

        //Tests with correct inputs
        it('Two positive integer numbers', () => {
            assert(mathEnforcer.sum(1, 1) === 2);
        });
        it('Two negative integer numbers', () => {
            assert(mathEnforcer.sum(-1, -1) === -2);
        });
        it('Two decimal numbers', () => {
            assert(mathEnforcer.sum(1.5, 2.6) === 4.1);
        });
        it('Two decimal negative numbers', () => {
            assert(mathEnforcer.sum(-1.5, -2.6) === -4.1);
        });

        //Tests with incorrect inputs
        it('First paramete string, second number', () => {
            assert(mathEnforcer.sum('', 1.5) === undefined);
        });
        it('First parameter number, second string', () => {
            assert(mathEnforcer.sum(1.5, '') === undefined);
        });
    });

})

