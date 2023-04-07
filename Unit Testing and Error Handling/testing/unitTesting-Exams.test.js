const { assert , expect} = require('chai');
let library = require('./unitTesting.exam');

describe('Library tests', () => {

    describe('calcPriceOfBook tests', () => {
        it('invalid input - name of the book', () => {
            expect(()=>library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
        });
        it('invalid input - year of the book', () => {
            expect(()=>library.calcPriceOfBook('1', '1')).to.throw('Invalid input');
        });
        it('Valid date and year is below 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`);
        });
        it('Valid date and year equal to 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(`Price of The Little Prince is 10.00`);
        });
        it('Valid date and year is greater than 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1981)).to.equal(`Price of The Little Prince is 20.00`);
        });
    });

    describe('findBook tests', () => {
        it('Invalid input - empty array', () => {
            expect(()=>library.findBook([], 'The Little Prince')).to.throw(`No books currently available`);
        });
        it('Valid input - available book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Troy")).to.equal('We found the book you want.');
        });
        it('Invalid input - not available book', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "JS is Great!")).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks tests', () => {
        it('Invalid input - string', () => {
            expect(()=>library.arrangeTheBooks('test')).to.throw('Invalid input');
        });
        it('Invalid input - negative number', () => {
            expect(()=>library.arrangeTheBooks(-100)).to.throw('Invalid input');
        });
        it('5 shelves to less than 40 books', () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });
        it('5 shelves to equal 40 books', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it('5 shelves to equal more of 40 books', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
})