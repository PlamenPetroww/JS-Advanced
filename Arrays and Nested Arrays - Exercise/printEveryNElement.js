function printEveryNElement(arr, step) {

    return(arr.filter((el, i) => {
        if(i % step === 0) {
            return el;
        }
    }))
}

console.log(printEveryNElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2))
console.log(printEveryNElement(['1', 
'2',
'3', 
'4', 
'5'], 
6))