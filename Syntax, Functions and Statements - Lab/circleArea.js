function solve(input) {

    let asd = typeof(input)

    if(asd == "number") {
        asd = Math.pow(input, 2) * Math.PI;
        console.log(asd.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${asd}.`)
    }
}

solve(5)
solve("ASD")