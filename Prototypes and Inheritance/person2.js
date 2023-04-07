function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName
    };

    Object.defineProperty(result, 'fullName', {
        enumerable: true,
        configurable: true,
        get() {
            return result.firstName + ' ' + result.lastName
        },

        set(value) {
            [result.firstName, result.lastName] = value.split(' ')
        }
    });

    return result;
}

let person = createPerson('John', 'Peter');
console.log(person.fullName);

person.lastName = 'Peterson';

console.log(person.fullName);

person.fullName = 'Jan Smith';

console.log(person)