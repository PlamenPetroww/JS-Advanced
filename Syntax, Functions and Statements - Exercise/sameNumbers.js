function solve(input) {

    let numToString = input.toString();
    let myNum = numToString[0];
    let isSame = true;
    let sum = 0;

    for(let i = 0; i < numToString.length; i++) {
        if(numToString[i] !== myNum) {
            isSame = false;
        }
        sum += Number(numToString[i]);
    }
    console.log(isSame)
    console.log(sum)
}

solve(22)
solve(1234)