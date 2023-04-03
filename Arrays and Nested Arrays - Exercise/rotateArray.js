function rotateArray(arr, num) {

    let last = "";
    for(let i = 0; i < num; i++) {
        last = arr.pop();
        arr.unshift(last)
    }
    console.log(arr.join(" "));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)