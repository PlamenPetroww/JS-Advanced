class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity,
            this.books = [];
    };

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        }
        if (typeof bookName != 'string' && typeof bookAuthor != 'string'
            && bookName == '' && bookAuthor == '') {
            return;
        }
        if (this.books.length >= this.capacity) {
            throw new TypeError('Not enough space in the collection.');
        } else {
            this.books.push({
                bookName,
                bookAuthor,
                paid: false
            });
        }

        return `The ${bookName}, with an author ${bookAuthor}, collect.`

    };

    payBook(bookName) {
        const index = this.books.find(c => c.bookName == bookName);

        if (index === undefined) {
            throw new TypeError(`${bookName} is not in the collection.`);
        }
        if (index.paid === true) {
            throw new TypeError(`${bookName} has already been paid.`);
        }
        index.paid = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        const index = this.books.findIndex(c => c.bookName == bookName);
        if (index == -1) {
            throw new TypeError(`The book, you're looking for, is not found.`);
        }
        if (this.books[index].paid === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books.splice(index, 1);
        return `${bookName} remove from the collection.`;

    };

    getStatistics(bookAuthor) {
        const result = [];

        if (bookAuthor === undefined) {
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            this.books
                .sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach((book) => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`));
            return result.join('\n');
        }
        const foundBooksAuthor = this.books.filter((book) => book.bookAuthor === bookAuthor);
        if (foundBooksAuthor.length > 0) {
            foundBooksAuthor.forEach((book) =>
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid'}.`));
        } else {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        return result.join('\n');
    }

        /* if (bookAuthor === undefined) {
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName))
                .forEach((book) => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.paid ? "Has Paid" : "Not Paid"}.`));
        }
        const findAuthor = this.books.filter((book) => book.bookAuthor === bookAuthor);
        if (findAuthor.length > 0) {
            findAuthor.forEach((book) =>
                result.push(`${book.bookName} == ${book.bookAuthor} - ${book.paid ? "Has Paid" : "Not Paid"}.`));
        } else {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }
        return result.join('\n'); */
    
}

let library;

/* library = new LibraryCollection(2)
console.log(library.addBook('In Search of Lost Time', 'Marcel Proust'));
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.addBook('Ulysses', 'James Joyce'));

console.log('-------------'); */

/* library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
console.log(library.payBook('In Search of Lost Time'));
console.log(library.payBook('Don Quixote'));


console.log('-------------'); */

/* library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));
console.log(library.removeBook('In Search of Lost Time'));

console.log('-------------'); */



/* library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

console.log('-------------'); */

library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



