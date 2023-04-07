function cardFactory(face, suit) {

    let facec = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'D',
        'K',
        'A'
    ];

    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    };

    if(facec.includes(face) == false) {
        throw new TypeError('Invalid face');
    } else if (suits.hasOwnProperty(suit) == false) {
        throw new TypeError('Invalid suit');
    }

    const result = {
        face,
        suit,
        toString() {
            return this.face + suits[this.suit];
        }
    };

    return result;
 
}
const cards = [
    cardFactory('A', 'S'),
    cardFactory('8', 'D')
]

console.log(cards.join('\n'));