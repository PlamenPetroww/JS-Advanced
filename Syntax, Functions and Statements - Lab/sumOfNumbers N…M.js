function sum(a, b) {

    let num1 = Number(a);
    let num2 = Number(b);
    let res = 0;

    for(let i = num1; i <= num2; i++) {
        res += i;
    }
    console.log(res)
}

/* sum("1", "5") */
sum("-8", "20")