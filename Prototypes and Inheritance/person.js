class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName
    }

    get fullName() {
        return this.firstName + ' ' + this.lastName
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }

}
