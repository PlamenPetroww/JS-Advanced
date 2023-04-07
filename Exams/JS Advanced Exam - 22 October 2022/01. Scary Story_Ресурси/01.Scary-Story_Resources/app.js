window.addEventListener("load", solve);

function solve() {

  let firstNameElement = document.querySelector('#first-name');
  let lastNameElement = document.querySelector('#last-name');
  let ageElement = document.querySelector('#age');
  let storyTitleElement = document.querySelector('#story-title');
  let storyElement = document.querySelector('#story');
  let genreElement = document.querySelector('#genre');
  let previewList = document.querySelector('#preview-list');
  let deletedList = document.querySelector('#main');
  //let bodyText = document.querySelector('.body');

  //Buttons


  let formButton = document.querySelector('#form-btn');
  formButton.addEventListener('click', published);
  formButton.disabled = false;



  function published(e) {
   // e.preventDefault();

    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;
    let age = ageElement.value;
    let storyTitle = storyTitleElement.value;
    let story = storyElement.value;
    let genre = genreElement.value;


    if (firstName == ''
      || lastName == ''
      || age == ''
      || storyTitle == ''
      || story == ''
      || genre == '') {
      return;
    }

    firstNameElement.value = '';
    lastNameElement.value = '';
    ageElement.value = '';
    storyTitleElement.value = '';
    storyElement.value = '';
    genreElement.value = '';

    // Make DOM

    let liElement = document.createElement('li');
    liElement.classList.add('story-info')
    
    let articleElement = document.createElement('article');
    
    let h4Element = document.createElement('h4');
    h4Element.innerText = `Name: ${firstName} ${lastName}`;
    let p1Element = document.createElement('p')
    p1Element.innerText = `Age: ${age}`;
    let p2Element = document.createElement('p');
    p2Element.innerText = `Title: ${storyTitle}`;
    let p3Element = document.createElement('p')
    p3Element.innerText = `Genre: ${genre}`;
    let p4Element = document.createElement('p');
    p4Element.innerText = `${story}`;

    articleElement.appendChild(h4Element);
    articleElement.appendChild(p1Element);
    articleElement.appendChild(p2Element);
    articleElement.appendChild(p3Element);
    articleElement.appendChild(p4Element);
    liElement.appendChild(articleElement);
    

    //Buttons

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.innerText = 'Save Story';
    saveBtn.addEventListener('click', saveText);

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn')
    editBtn.innerText = 'Edit Story';
    editBtn.addEventListener('click', editText);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete Story';
    deleteBtn.addEventListener('click', deleteText);

    liElement.appendChild(saveBtn);
    liElement.appendChild(editBtn);
    liElement.appendChild(deleteBtn);
    previewList.appendChild(liElement);


    function saveText(e) {
      deletedList.textContent = '';
      let h1Element = document.createElement('h1');
      h1Element.innerText = 'Your scary story is saved!'
      deletedList.appendChild(h1Element)
    }

    function editText(e) {
      e.preventDefault()
      
      let currentText = e.target.parentElement;
      let articleContent = currentText.getElementsByTagName('article')[0].children;

      let fNameValue = articleContent[0].textContent.split(' ')[1];
      let lNamevalue = articleContent[0].textContent.split(' ')[2];
      let ageValue = articleContent[1].textContent.split(': ')[1];
      let storyTitleValue = articleContent[2].textContent.split(': ')[1];;
      let genreValue = articleContent[3].textContent.split(': ')[1];
      let storyValue = articleContent[4].textContent;

      firstNameElement.value = fNameValue;
      lastNameElement.value = lNamevalue;
      ageElement.value = ageValue;
      storyTitleElement.value = storyTitleValue;
      genreElement.value = genreValue;
      storyElement.value = storyValue

     formButton.disabled = false;
     liElement.remove()
    }

    function deleteText(e) {
      liElement.remove();
      formButton.disabled = false;
    }


  }

}
