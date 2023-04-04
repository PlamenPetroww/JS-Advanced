function changeText() {
    let header = document.getElementsByTagName('h1');

    header[0].innerHTML = '<p>Test!</p>';
    header[0].style.color = 'red';
}