function squareNumbers(inputNumber, ...command) {

    command.forEach(element => {
        inputNumber = manipulator(inputNumber, element)
    });

    function manipulator(num, op) {
        switch (op) {
            case "chop":
                num /= 2;
                console.log(num)
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num)
                break;
            case 'spice':
                num += 1;
                console.log(num)
                break;
            case 'bake':
                num *= 3;
                console.log(num)
                break;
            case 'fillet':
                num *= 0.8;
                console.log(num)
                break;
        }
        return num;
    }
}

squareNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')