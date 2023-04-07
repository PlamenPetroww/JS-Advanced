function solve() {

    // Fields

    let clientName = document.querySelector('#recipientName');
    let titleText = document.querySelector('#title');
    let inputMessage = document.querySelector('#message');
    let listOfMails = document.querySelector('#list');
    let sentMails = document.querySelector('.sent-list');
    let deletedMails = document.querySelector('.delete-list');

    // Buttons

    let buttonAddToList = document.querySelector('#add');
    buttonAddToList.addEventListener('click', addEmail);
    let buttonReset = document.querySelector('#reset');
    buttonReset.addEventListener('click', editEmails);

    function addEmail(e) {
        e.preventDefault();

        let name = clientName.value;
        let title = titleText.value;
        let message = inputMessage.value;

        if(name == '' || title == '' || message == '') {
            return;
        }

        clientName.value = '';
        titleText.value = '';
        inputMessage.value = '';

        let tableRow = document.createElement('li');
        let h4FirstElement = document.createElement('h4');
        h4FirstElement.textContent = `Title: ${title}`;
        let h4SecondElement = document.createElement('h4');
        h4SecondElement.textContent =`Recipient Name: ${name}` ;
        let spanElement = document.createElement('span');
        spanElement.textContent = message;
        let divElement = document.createElement('div');
        divElement.classList.add('list-action')

        let buttonSend = document.createElement('button');
        buttonSend.setAttribute('id', 'send');
        buttonSend.textContent = 'Send';
        buttonSend.addEventListener('click', senden);

        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('id', 'delete')
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', deletetingEmail);

        // DOM

        tableRow.appendChild(h4FirstElement);
        tableRow.appendChild(h4SecondElement);
        tableRow.appendChild(spanElement);
        divElement.appendChild(buttonSend);
        divElement.appendChild(buttonDelete);
        tableRow.appendChild(divElement);

        listOfMails.appendChild(tableRow);

    }

    function editEmails(e) {
        e.preventDefault();

        clientName.value = '';
        titleText.value = '';
        inputMessage.value = '';

    }

    function senden(e) {
        e.preventDefault();

        let currentEmail = e.target.parentElement.parentElement;
        let sendetEmail = e.target.parentElement.parentElement.children;

        let nameValue = sendetEmail[0].textContent;
        let titleValue = sendetEmail[1].textContent;
        let messageValue = sendetEmail[2].textContent;

        clientName.value = nameValue;
        titleText.value = titleValue;
        inputMessage.value = messageValue;

        let titleToSend = titleText.value.split(': ')[1];
        let nameToSend = clientName.value.split(': ')[1]; 

        let rowTable = document.createElement('li');
        let elementSpanOne = document.createElement('span');
        elementSpanOne.textContent = `To: ${titleToSend}`
        
        let elementSpanTwo = document.createElement('span');
        elementSpanTwo.textContent = `Title: ${nameToSend}`;
        let elementDiv = document.createElement('div');
        elementDiv.classList.add('btn');
        
        let buttonSentEmails = document.createElement('button');
        buttonSentEmails.addEventListener('click', deletetingEmail);
        buttonSentEmails.classList.add('delete');
        buttonSentEmails.textContent = 'Delete';

        clientName.value = '';
        titleText.value = '';
        inputMessage.value = '';

        rowTable.appendChild(elementSpanOne);
        rowTable.appendChild(elementSpanTwo);
        rowTable.appendChild(elementDiv);
        elementDiv.appendChild(buttonSentEmails);

        sentMails.appendChild(rowTable)
          
        currentEmail.remove()
    }

    function deletetingEmail(e) {
        e.preventDefault();
        
        let currentEmail = e.target.parentElement.parentElement;
        let deleteEmail = e.target.parentElement.parentElement.children;
        
        let nameV = currentEmail.children[0].textContent.split(': ')[1].split(' ')[0];
        let titleV = currentEmail.children[1].textContent.split(': ')[1].split(' ')[0];

        let rowTable = document.createElement('li');
        
        let firstSpanElement = document.createElement('span');
        firstSpanElement.textContent = `To: ${nameV}`;

        let secondSpanElement = document.createElement('span');
        secondSpanElement.textContent = `Title: ${titleV}`;

        rowTable.appendChild(firstSpanElement);
        rowTable.appendChild(secondSpanElement);

        deletedMails.appendChild(rowTable);
        
        currentEmail.remove();
        
    }

}
solve()

/* function solve() {
    const submitBtn = document.getElementById('add');
    const resetBtn = document.getElementById('reset');
    const [nameElem, titleElem, messageElem] = document.querySelectorAll('form input, textarea');
    const form = document.querySelectorAll('form input, textarea');
  
    submitBtn.addEventListener('click', add);
    resetBtn.addEventListener('click', reset);
  
    function add(e) {
      e.preventDefault();
  
      if (!nameElem.value || !titleElem.value || !messageElem.value) {
        return;
      }
  
      let name = nameElem.value;
      let title = titleElem.value;
  
      const li = document.createElement('li');
      const div = document.createElement('div');
      const h4Title = create('h4', `Title: ${title}`);
      const h4Name = create('h4', `Recipient Name: ${name}`);
      const span = create('span', messageElem.value);
      div.setAttribute('id', 'list-action');
  
      const sendBtn = createButton('send', 'Send', onSend, 'id');
      const deleteBtn = createButton('delete', 'Delete', onDelete, 'id');
  
      append(div, sendBtn, deleteBtn);
      append(li, h4Title, h4Name, span, div);
  
      document.getElementById('list').appendChild(li);
  
      Array.from(form).map(x => x.value = '');
  
      function onDelete(e) {
        e.preventDefault();
        const li3 = document.createElement('li');
        const spanDel = create('span', `To: ${name}`);
        const spanTitleDel = create('span', `Title: ${title}`);
        append(li3, spanDel, spanTitleDel);
        document.querySelector('.delete-list').appendChild(li3);
        e.target.parentElement.parentElement.remove();
      }
  
      function onSend(e) {
        e.preventDefault();
        const li2 = document.createElement('li');
        const div2 = document.createElement('div');
        const spanTo = create('span', `To: ${name}`);
        const spanTitle = create('span', `Title: ${title}`);
        div2.classList.add('btn');
  
        const deleteBtn2 = createButton('delete', 'Delete', onDelete, 'class');
        div2.appendChild(deleteBtn2)
        append(li2, spanTo, spanTitle, div2);
        document.querySelector('.sent-list').appendChild(li2);
        li.remove();
      }
  
      function append(parent, ...params) {
        params.map((x) => parent.appendChild(x));
      }
    }
  
    function createButton(attName, content, func, att) {
      const btn = document.createElement('button');
      btn.setAttribute('type', 'submit');
      btn.setAttribute(att, attName);
      btn.addEventListener('click', func);
      btn.textContent = content;
      return btn;
    }
  
    function create(type, content) {
      const element = document.createElement(type);
      element.appendChild(document.createTextNode(content));
      return element;
    }
  
    function reset(e) {
      e.preventDefault();
      Array.from(form).map(x => x.value = '');
    }
  }
  solve(); */