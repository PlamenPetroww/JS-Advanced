function addItem() {
    
    const content = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    li.textContent = content;
    document.getElementById('items').appendChild(li);
    document.getElementById('newItemText').value = '';

}