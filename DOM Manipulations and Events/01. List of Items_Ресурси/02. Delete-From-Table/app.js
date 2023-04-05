/* 
function deleteByEmail() {
    
    let value = document.querySelector('input[name="email"]').value;

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let isDeleted = true;

    for(let row of rows) {
        if(row.children[1].textContent == value) {
            let parent = row.parentElement;
            parent.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
        }
        else {
            isDeleted = false;
            document.getElementById('result').textContent = 'Not found.'
        }
    }
} */

function deleteByEmail() {

    let value = document.querySelector('input[name="email"]').value;

    let rows = Array.from(document.querySelectorAll('tbody tr'));

    let isDeleted = false;

    for (let row of rows) {
        if (row.children[1].textContent == value) {
            row.remove();
            isDeleted = true;
        }
    }
    document.getElementById('result').textContent = isDeleted ? 'Deleted.' : 'Not found.'

    //document.getElementById('result').textContent = 'Deleted.';

    //document.getElementById('result').textContent = 'Not found.'

}