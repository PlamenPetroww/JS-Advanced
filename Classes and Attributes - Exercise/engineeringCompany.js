function solve(input) {

    let brands = {};

    for(let item of input) {
        let [auto, model, quantity] = item.split(' | ');
        quantity = Number(quantity);

        if(!brands.hasOwnProperty(auto)) {
            brands[auto] = {};
        }
        if(!brands[auto].hasOwnProperty(model)) {
            brands[auto][model] = 0;
        } 
        brands[auto][model] += quantity
    }
    for(let [brand, models] of Object.entries(brands)) {
        console.log(brand);
        for(let [model, quant] of Object.entries(models)) {
            console.log(`###${model} -> ${quant}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])