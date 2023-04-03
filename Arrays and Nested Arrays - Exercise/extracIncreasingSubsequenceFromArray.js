function extract(arr) {

    let res = [];
    let biggestOne = arr[0];
    res = arr.reduce((acc, currentElement) => {
        if(biggestOne <= currentElement) {
            acc.push(currentElement);
            biggestOne = currentElement;
        }
        return acc
    }, []);

    return res
}

console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))