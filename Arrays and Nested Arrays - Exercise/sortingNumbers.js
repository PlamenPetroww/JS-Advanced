function solve(arr) {

    let res = [];
    let anotherRes = [];
    let newArr = arr.sort((a, b) => {
        return a - b;
    })
    for(let i = 0; i <= newArr.length + 2; i++) {
        let first = arr.shift();
        res.push(first)
        let last = arr.pop();
        res.push(last)
    }
    return res;
    
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))