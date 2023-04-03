function start() {
    let state = '';

    function append(str) {
        state += str;
    }

    function removeStart(str) {
        state = state.slice(str)
    }

    function removeEnd(str) {
        state = state.slice(0, -str);
    }

    function print() {
        console.log(state)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}


let firstZeroTest = start();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

