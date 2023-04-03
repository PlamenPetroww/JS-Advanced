function addAndRemove(input) {

    let result = [];
    let number = 1;
    
    input.forEach(command => {
        command === "add" ? result.push(number) : result.pop();
        number++;
        
    });
    return result.length === 0 ? "Empty" : result.join("\n");
}

console.log(addAndRemove(['add',
    'add',
    'add',
    'add']
))
console.log("--------");
console.log(addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']))