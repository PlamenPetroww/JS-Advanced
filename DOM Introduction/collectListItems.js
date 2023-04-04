function extractText() {

    let listedItems = document.querySelectorAll('ul li');

    let textArea = document.getElementById('result');

    for(let listItem of listedItems) {
        textArea.value += listItem.textContent + "\n";
    }

}

extractText()