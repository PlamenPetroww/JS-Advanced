function solve(juices) {

    let obj = {};
    let bottles = 1;

    for (let item of juices) {
        let [product, quantity] = item.split(' => ');
        quantity = Number(quantity);
        if (!obj.hasOwnProperty(product)) {
            obj[product] = quantity;
            if(quantity > 1000) {
                obj[product] = {};
                obj[product][bottles]++;
            }
        } else {
            obj[product] += quantity;
            obj[product][bottles] +=1;
        }
    }
    /* for(let [fruit, quant] of Object.entries(obj)) {
        if(quant > 1000) {
            bottles = Math.floor(quant / 1000);
            console.log(`${fruit} => ${bottles.toFixed(0)}`)
        }
    } */
}

solve([//'Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])
