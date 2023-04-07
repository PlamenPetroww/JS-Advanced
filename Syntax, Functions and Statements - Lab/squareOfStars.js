function solve(input) {

    let znak = "*";
    let asd = input.toString();

    for(let i = 1; i <= input; i++) {
        let res = "";
        for(let j = 1; j <= input; j++) {
            res += znak + " "
        }
        console.log(res)
    }

}

solve(3)