function solve(fruit, grams, price) {

    let gramsToKg = (grams / 1000);
    let total = (gramsToKg * price);
    console.log(`I need $${total.toFixed(2)} to buy ${gramsToKg.toFixed(2)} kilograms ${fruit}.`
    )

}

solve('orange', 1346, 1.80)
solve('apple', 1563, 2.35)