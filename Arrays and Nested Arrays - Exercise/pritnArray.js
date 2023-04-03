function solve(input, delimeter) {

    let res = [];

    for (let i = 0; i < input.length; i++) {
        if (i + 1 == input.length) {
            res.push(input[i]);
            break;
        }
        res.push(input[i], delimeter)
    }
    console.log(res.join(""))
}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_')