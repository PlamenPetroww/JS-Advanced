function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(i => {
            i.addEventListener('focus', onFokus);
            i.addEventListener('blur', onBlur);
        });

    function onFokus(ev) {
        ev.target.parentElement.classList.add('focused');
    }
    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused');
    }
}