function start(input) {

    let result = [];

    for (let item of input) {
        let [command, str] = item.split(" ");

        if(command == 'add') {
            function add(str) {
                result.push(str);
            }
        }

        if(command == 'remove') {
            function remove(str) {
                result.shift(str);
            }
        }

        if(command == 'print') {
            function print() {
                console.log(result.join(','))
            }
        }

        return {
            add,
            remove,
            print
        }
    }
}

start(['add hello', 'add again', 'remove hello', 'add again', 'print'])
let finalResult = start();

finalResult.add()
finalResult.remove()
finalResult.print()

