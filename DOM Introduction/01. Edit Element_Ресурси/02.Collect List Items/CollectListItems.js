function extractText() {
    let itemsNodes = document.querySelectorAll("ul#items li");
    let textArea = document.querySelector('#result');
    for(let node of itemsNodes) {
        textArea.value += node.textContent + "\n";
    }
}