function ope(a, b, znak) {

    if(znak === "+") {
        console.log(a + b)
    } else if (znak === "-"){
        console.log(a - b)
    } else if (znak === "*") {
        console.log(a * b)
    } else if (znak === "/") {
        console.log(a / b)
    } else if(znak === "%") {
        console.log(a % b)
    } else if (znak === "**") {
        let asd = Math.pow(a, b)
        console.log(asd)
    }

}



ope(5, 6, '+')
ope(3, 3, "**")