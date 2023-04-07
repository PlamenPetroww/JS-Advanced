let companyAdministration = require('./companyAdministration')
let { assert } = require('chai');

describe('Tests CompanyAdministration', function () {
    describe('test', function () {
        it('test different position', function () {
            let exp = `We are not looking for workers for this position.`;
            assert.throw(() => companyAdministration.hiringEmployee('Todor', 'DifferentPosition', 30), exp)
        });
        it('Test experience with greater 3 years', () => {
            let exp = `Plamen was successfully hired for the position Programmer.`
            assert.equal(companyAdministration.hiringEmployee('Plamen', 'Programmer', 30), exp);
            assert.equal(companyAdministration.hiringEmployee('Plamen', 'Programmer', 3), exp);
        })
        it('Test experience with invalid value', function () {
            let exp = `Plamen is not approved for this position.`
            assert.equal(companyAdministration.hiringEmployee('Plamen', 'Programmer', 2), exp)
            assert.equal(companyAdministration.hiringEmployee('Plamen', 'Programmer', 1), exp)
        });
    });

    describe('calculateSalary', () => {
        it('Test calculateSalary with wrong value', () => {
            assert.throw(() => companyAdministration.calculateSalary(-10), 'Invalid hours');
            assert.throw(() => companyAdministration.calculateSalary(('Gosho'), 'Invalid hours'))
        });
        it('test calculateSalary with valid value', () => {
            assert.equal(companyAdministration.calculateSalary(0), 0);
            assert.equal(companyAdministration.calculateSalary(1), 15);
            assert.equal(companyAdministration.calculateSalary(15), 15 * 15);
            assert.equal(companyAdministration.calculateSalary(160), 160 * 15)
        })
        it('Test calculateSalary bonus', () => {
            assert.equal(companyAdministration.calculateSalary(161), 161 * 15 + 1000);
            assert.equal(companyAdministration.calculateSalary(200), 200 * 15 + 1000);
        });
    });
    describe('firedEmployee', () => {
        it('Test fired Emp with wrong data', () => {
            assert.throw(() => companyAdministration.firedEmployee('peshno', 0), 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(('{}', 1), 'Invalid input'));
            assert.throw(() => companyAdministration.firedEmployee(1, '[]'), 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee(['Todor'], 2), 'Invalid input');
            assert.throw(() => companyAdministration.firedEmployee((['Plamen'], -1), 'Invalid input'));
            assert.throw(() => companyAdministration.firedEmployee((['Plamen'], 'pesho'), 'Invalit input'));
        });
        it('Test firedEmp ', () => {
            assert.equal(companyAdministration.firedEmployee(['Plamen'], 0), '');
            assert.equal(companyAdministration.firedEmployee(['Plamen', 'Gosho'], 0), 'Gosho');
            assert.equal(companyAdministration.firedEmployee(['Plamen', 'Gosho', 'Pesho'], 0), 'Gosho, Pesho');
            assert.equal(companyAdministration.firedEmployee(['Plamen', 'Gosho', 'Pesho'], 1), 'Plamen, Pesho');
            assert.equal(companyAdministration.firedEmployee(['Plamen', 'Gosho', 'Pesho'], 2), 'Plamen, Gosho');
        });
    });
});