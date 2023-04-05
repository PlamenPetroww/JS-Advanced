function addItem() {

    const content = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = content;
    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete);
    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value = '';

    function onDelete(event) {
        event.target.parentElement.remove();
    }
}
