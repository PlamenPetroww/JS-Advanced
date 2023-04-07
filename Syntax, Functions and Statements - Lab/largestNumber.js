function largestNumber(...params) {

    let res = Math.max(...params);

    console.log(`The largest number is ${res}.`)

}

largestNumber(5, -3, 16, 200, 123123123, 42314523452345)