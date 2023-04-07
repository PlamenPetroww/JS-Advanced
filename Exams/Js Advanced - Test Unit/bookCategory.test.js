let bookSelection = require('./bookCategory');
let { assert, expect } = require('chai');

describe('test', () => {
    describe('test', () => {
        it('happy path', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 20), 'Those books are suitable')
            assert.equal(bookSelection.isGenreSuitable('Horror', 20), 'Those books are suitable')
            assert.equal(bookSelection.isGenreSuitable('a', 20), 'Those books are suitable')
            assert.equal(bookSelection.isGenreSuitable('a', 10), 'Those books are suitable')
        });
        it('genre', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 10), 'Books with Thriller genre are not suitable for kids at 10 age')
            assert.equal(bookSelection.isGenreSuitable('Horror', 10), 'Books with Horror genre are not suitable for kids at 10 age')
        });
        it('age keys', () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), 'Books with Thriller genre are not suitable for kids at 12 age')
            assert.equal(bookSelection.isGenreSuitable('Horror', 12), 'Books with Horror genre are not suitable for kids at 12 age')
        });
    });
    describe('test', () => {
        it('happy path', () => {
            assert.equal(bookSelection.isItAffordable(1, 2), 'Book bought. You have 1$ left')
        });
        it('happy path', () => {
            assert.equal(bookSelection.isItAffordable(1, 1), 'Book bought. You have 0$ left')
        });
        it('not enough money', () => {
            assert.equal(bookSelection.isItAffordable(2, 1), "You don\'t have enough money")
            //expect(bookSelection.isItAffordable(2, 1)).to.equal ('You don\'t have enough money')
        });
        it('invalid input', () => {
            assert.throw(() => bookSelection.isItAffordable('2', 1))
            assert.throw(() => bookSelection.isItAffordable('2', '2'))
            assert.throw(() => bookSelection.isItAffordable(2, '2'))
            /* expect(() => bookSelection.isItAffordable('2', 1).to.throw())
            expect(() => bookSelection.isItAffordable('2', '2').to.throw())
            expect(() => bookSelection.isItAffordable(2, '2').to.throw()) */
        });
    });
    describe('test', () => {
        it('test', () => {
            expect(bookSelection.suitableTitles([
                {
                    title: 'aa',
                    genre: 'a'
                }], 'a')).to.deep.equal(['aa']);
        });
        it('test', () => {
            expect(bookSelection.suitableTitles([
                {
                    title: 'aa',
                    genre: 'a'
                },
                {
                    title: 'ab',
                    genre: 'a'
                },
                {
                    title: 'bb',
                    genre: 'b'
                }], 'a')).to.deep.equal(['aa', 'ab']);
        });
        it('no match', () => {
            expect(bookSelection.suitableTitles([
                {
                    title: 'bb',
                    genre: 'b'
                }], 'a')).to.deep.equal([]);
        });
        it('inalid input', () => {
            expect(() => bookSelection.suitableTitles('aabb', 'a')).to.throw();
            expect(() => bookSelection.suitableTitles(
                [
                    {
                        title: 'bb',
                        genre: '5'
                    }], 5)).to.throw();
        });
    });
});