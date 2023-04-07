function wordsUppercase(text) {

    let textToLowerCase = text.toLowerCase();
    let splitted = textToLowerCase.split(" ");
    let res = [];
    let neTrqbwa = [];
    let myWord = "";
    let asd = " ";
    for (let i = 0; i < textToLowerCase.length; i++) {
        let ch = textToLowerCase.charCodeAt(i);
        if ((ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122)) {
            myWord += textToLowerCase[i]
            
        } else {
            res.push(myWord);
            myWord = "";
        }
        
    }

    let dsa = "";
    if(res.includes(dsa)) {
        let indexOf = res.indexOf(dsa);
        res.splice(indexOf, 1);
    }
    console.log((res.join(", ")).toUpperCase())
}

wordsUppercase('Hi, how are you?')
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')
console.log("FUNCTIONS, IN, JS, CAN, BE, NESTED, I, E, HOLD, OTHER, FUNCTIONS")