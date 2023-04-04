function sumTable() {

    let digit = document.querySelectorAll('table tr')
    sum = 0;

    for(let i = 1; i < digit.length - 1; i++) {
        let columns = digit[i].children;

        sum += Number(columns[1].textContent);
    }
    
    document.getElementById('sum').innerText = sum;
}