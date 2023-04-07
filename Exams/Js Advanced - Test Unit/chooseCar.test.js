let chooseYourCar = require('./chooseCar');
let { assert } = require('chai');

describe('chooseYourCar', () => {


    describe('choosingType Tests', () => {
        it('Schould throw error, when type is not string', () => {
            assert.throw(() => chooseYourCar.choosingType(1, '1', 1))
        });
        it('Schould throw error, when color is not string', () => {
            assert.throw(() => chooseYourCar.choosingType('1', 1, 1))
        });
        it('Schould throw error, when year is not number', () => {
            assert.throw(() => chooseYourCar.choosingType(1, 1, '1'))
        });
        it('Schould throw error, when year is less than 1900', () => {
            assert.throw(() => chooseYourCar.choosingType('1', '1', 1899), 'Invalid Year!')
        });
        it('Schould throw error, when year is more than 2022', () => {
            assert.throw(() => chooseYourCar.choosingType('1', '1', 2023), 'Invalid Year!')
        });
        it('Schould throw error, when value is not a "Sedan"', () => {
            assert.throw(() => chooseYourCar.choosingType('1', '1', 2022), 'This type of car is not what you are looking for.')
        });
        it('Schould throw error, when the year of the car is greater or equal 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), `This red Sedan meets the requirements, that you have.`)
            assert.equal(chooseYourCar.choosingType('Sedan','blue',2015),`This blue Sedan meets the requirements, that you have.`)
        });
        it('Schould throw error, when the year of the car is sell than 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2008), `This Sedan is too old for you, especially with that red color.`)
            //assert.equal(chooseYourCar.choosingType('Sedan','blue',2001),`This blue Sedan meets the requirements, that you have.`)
        });

    });
    describe('brandName Tests', () => {
        it('If input is not correct - invalid array', () => {
            assert.throw(() => chooseYourCar.brandName(1, 1), 'Invalid Information!')
        });
        it('If input is not correct - invalid number', () => {
            assert.throw(() => chooseYourCar.brandName([1], '1'), 'Invalid Information!')
        });
        it('If input is not correct', () => {
            assert.throw(() => chooseYourCar.brandName(1, '1'), 'Invalid Information!')
        });it('If input is not correct', () => {
            assert.throw(() => chooseYourCar.brandName('1', 1), 'Invalid Information!')
        });
        it('If input is not correct', () => {
            assert.throw(() => chooseYourCar.brandName('1', []), 'Invalid Information!')
        });
        it('If input is not correct', () => {
            assert.throw(() => chooseYourCar.brandName(1, []), 'Invalid Information!')
        });
        describe('chooseYourCar', () => {


    describe('choosingType Tests', () => {
        it('Schould throw error, when type is not string', () => {
            assert.throw(() => chooseYourCar.choosingType(1, '1', 1))
        });
        it('Schould throw error, when color is not string', () => {
            assert.throw(() => chooseYourCar.choosingType('1', 1, 1))
        });
        it('Schould throw error, when year is not number', () => {
            assert.throw(() => chooseYourCar.choosingType(1, 1, '1'))
        });
        it('Schould throw error, when year is less than 1900', () => {
            assert.throw(() => chooseYourCar.choosingType('1', '1', 1899), 'Invalid Year!')
        });
        it('Schould throw error, when year is more than 2022', () => {
            assert.throw(() => chooseYourCar.choosingType('1', '1', 2023), 'Invalid Year!')
        });
        it('Schould throw error, when value is not a "Sedan"', () => {
            assert.throw(() => chooseYourCar.choosingType('1', '1', 2022), 'This type of car is not what you are looking for.')
        });
        it('Schould throw error, when the year of the car is greater or equal 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2010), `This red Sedan meets the requirements, that you have.`)
            assert.equal(chooseYourCar.choosingType('Sedan','blue',2015),`This blue Sedan meets the requirements, that you have.`)
        });
        it('Schould throw error, when the year of the car is sell than 2010', () => {
            assert.equal(chooseYourCar.choosingType('Sedan', 'red', 2008), `This Sedan is too old for you, especially with that red color.`)
            //assert.equal(chooseYourCar.choosingType('Sedan','blue',2001),`This blue Sedan meets the requirements, that you have.`)
        });

    });
    describe('brandName Tests', () => {
        it('If input is not correct - invalid array', () => {
            assert.throw(() => chooseYourCar.brandName(1, 1), 'Invalid Information!')
        });
        it('If input is not correct - invalid number', () => {
            assert.throw(() => chooseYourCar.brandName([1], '1'), 'Invalid Information!')
        });
        it('If input is not correct string als index', () => {
            assert.throw(() => chooseYourCar.brandName(1, '1'), 'Invalid Information!')
        });it('If input is not correct string als array', () => {
            assert.throw(() => chooseYourCar.brandName('1', 1), 'Invalid Information!')
        });
        it('If input is not correct array als number', () => {
            assert.throw(() => chooseYourCar.brandName('1', []), 'Invalid Information!')
        });
        it('If input is not correct number als array', () => {
            assert.throw(() => chooseYourCar.brandName(1, []), 'Invalid Information!')
        });
        it('If index is not correct', () => {
            assert.throw(() => chooseYourCar.brandName([1, 2, 3], -1), 'Invalid Information!')
        });
        it('If index is not correct', () => {
            assert.throw(() => chooseYourCar.brandName([1, 2, 3], undefined), 'Invalid Information!')
        });
        it('If index is not correct', () => {
            assert.throw(() => chooseYourCar.brandName([1, 2, 3], []), 'Invalid Information!')
        });
        it('If index is not correct', () => {
            assert.throw(() => chooseYourCar.brandName([1, 2, 3], {}), 'Invalid Information!')
        });
        it('If index is not correct', () => {
            assert.throw(() => chooseYourCar.brandName([1, 2, 3], 'string'), 'Invalid Information!')
        });
        it('If index is not correct', () => {
            assert.throw(() => chooseYourCar.brandName([1, 2, 3], 3), 'Invalid Information!')
        });
        it('If index is correct - BMW', () => {
            assert.equal(chooseYourCar.brandName(['BMW', 'AUDI'], 1), 'BMW')
        });
        it('If index is correct - VW', () => {
            assert.equal(chooseYourCar.brandName(['BMW', 'AUDI', 'VW'], 2), 'BMW, AUDI')
        });
    });
    describe('carFuelConsumption Tests', () => {

    });

})
    });
    describe('carFuelConsumption Tests', () => {
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption('1', 1), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption([], 1), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption({}, 1), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(0, 1), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(undefined, 1), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(-1, 1), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(1, '1'), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(1, []), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(1, {}), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(1, 0), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(1, '1'), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(1, -1), 'Invalid Information!')
        })
        it('distanceInKilometers or consumptedFuelInLitres  is not a numbers', () => {
            assert.throw(() => chooseYourCar.carFuelConsumption(1, undefined), 'Invalid Information!')
        })
        it('If the liters/100km is less or equal to 7L.', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100, 7), 'The car is efficient enough, it burns 7.00 liters/100 km.')
            assert.equal(chooseYourCar.carFuelConsumption(100, 5), 'The car is efficient enough, it burns 5.00 liters/100 km.')
        })
        it('If the liters/100km is more than 7L.', () => {
            assert.equal(chooseYourCar.carFuelConsumption(100, 8), 'The car burns too much fuel - 8.00 liters!')
            assert.equal(chooseYourCar.carFuelConsumption(100, 10), 'The car burns too much fuel - 10.00 liters!')
        })
    });

})