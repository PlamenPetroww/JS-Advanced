let properties = require('../repository');
let repository = require('../repository');
let entity = require('../repository');

const { expect } = require('chai');

describe('Repository', () => {
    describe('Initialization', () => {
        it('It should add props property on init', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);
        })
    })
})