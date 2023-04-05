function validate() {
    
    let input = document.getElementById('email');
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g;

    input.addEventListener('change', (e) => {
        if(e.target.value.match(pattern)) {
            e.target.classList.remove('error')
        } else {
            e.target.classList.add('error')
        }
    });
    
}

