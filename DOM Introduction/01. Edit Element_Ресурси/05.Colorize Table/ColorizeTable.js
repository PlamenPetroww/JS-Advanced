function colorize() {
    let item = document.querySelectorAll('table tr');

    for(let i = 1; i < item.length; i+=2) {
        item[i].style.background = 'teal';
    }
}