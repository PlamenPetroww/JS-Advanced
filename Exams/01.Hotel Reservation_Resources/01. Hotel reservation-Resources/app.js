window.addEventListener('load', solve);

function solve() {

    //Field Reservation

    let inputFirstName = document.getElementById('first-name');
    let inputSecondName = document.getElementById('last-name');
    let checkIn = document.getElementById('date-in');
    let checkOut = document.getElementById('date-out');
    let numberOfGuest = document.getElementById('people-count');
    let inputWithInfo = document.querySelector('.info-list');
    let inputConfirmed = document.querySelector('.confirm-list');
    let inputVerification = document.getElementById('verification');
    //Buttons

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', reservated);
    nextBtn.disabled = false;

    function reservated(e) {
        e.preventDefault();

        let firstName = inputFirstName.value;
        let lastName = inputSecondName.value;
        let dateIn = checkIn.value;
        let dateOt = checkOut.value;
        let guest = Number(numberOfGuest.value);

        if (inputFirstName.value == '' ||
            inputSecondName.value == '' ||
            checkIn.value == '' ||
            checkOut.value == ''||
            new Date (checkIn.value) >= new Date (checkOut.value) ||  
            numberOfGuest.value <= 0 ||
            numberOfGuest.value == '') {
            return;
        }

        let liElement = document.createElement('li');
        liElement.classList.add('reservation-content');

        let articleElement = document.createElement('article');
        liElement.appendChild(articleElement);

        let h3ElementName = document.createElement('h3');
        h3ElementName.textContent = `Name: ${firstName} ${lastName}`;

        articleElement.appendChild(h3ElementName);
        let paragraphIn = document.createElement('p');
        paragraphIn.innerText = `From date: ${dateIn}`;
        articleElement.appendChild(paragraphIn);

        let paragraphOut = document.createElement('p');
        paragraphOut.innerText = `To date: ${dateOt}`;
        articleElement.appendChild(paragraphOut);

        let paragraphPeople = document.createElement('p');
        paragraphPeople.innerText = `For ${guest} people`;
        articleElement.appendChild(paragraphPeople);

        let btnEdit = document.createElement('button');
        btnEdit.addEventListener('click', editReservation);
        btnEdit.innerText = 'Edit';
        btnEdit.classList.add('edit-btn');
        liElement.appendChild(btnEdit);

        let btnContinue = document.createElement('button');
        btnContinue.addEventListener('click', confirmed)
        btnContinue.innerText = 'Continue';
        btnContinue.classList.add('continue-btn');
        liElement.appendChild(btnContinue);

        inputWithInfo.appendChild(liElement);
        nextBtn.disabled = true;

        inputFirstName.value = '';
        inputSecondName.value = '';
        checkIn.value = '';
        checkOut.value = '';
        numberOfGuest.value = '';

        // Functions

        
        function editReservation() {

            inputFirstName.value = firstName;
            inputSecondName.value = lastName;
            checkIn.value = dateIn;
            checkOut.value = dateOt;
            numberOfGuest.value = guest;
            
            nextBtn.disabled = false;
            
            liElement.remove();
            
        }


        function confirmed() {

            inputConfirmed.appendChild(liElement);

            btnEdit.remove();
            btnContinue.remove();

            let btnConfirmed = document.createElement('button');
            btnConfirmed.classList.add('confirm-btn');
            btnConfirmed.innerText = 'Confirm';
            btnConfirmed.addEventListener('click', confirmedReservation)

            let btnCancel = document.createElement('button');
            btnCancel.classList.add('cancel-btn');
            btnCancel.innerText = 'Cancel';
            btnCancel.addEventListener('click', cancelReservation);

            liElement.appendChild(btnConfirmed);
            liElement.appendChild(btnCancel);

        }

        function confirmedReservation() {

            nextBtn.disabled = false;
            
            inputConfirmed.remove();

            let h1Element = document.createElement('h1');
            h1Element.innerText = 'Confirmed.';
            h1Element.classList.add('reservation-confirmed');
            inputVerification.appendChild(h1Element);

        }

        function cancelReservation() {

            nextBtn.disabled = false;
            liElement.remove();

            let h1ElementCancel = document.createElement('h1');
            h1ElementCancel.innerText = 'Cancelled.';
            h1ElementCancel.classList.add('reservation-cancelled');
            inputVerification.appendChild(h1ElementCancel);
        }
    }
}

/* function solve() {

    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const dateInInput = document.getElementById('date-in');
    const dateOutInput = document.getElementById('date-out');
    const guestsInput = document.getElementById('people-count');
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', makeReservation);

    const resContent = document.querySelector('ul.info-list');
    const confirmContent = document.querySelector('ul.confirm-list');

    function makeReservation() {
        // fields validation
        if (firstNameInput.value == ''
            || lastNameInput.value == ''
            || dateInInput.value == ''
            || dateOutInput.value == ''
            || guestsInput.value == ''
            || guestsInput.value <= 0
            || new Date(dateInInput.value) >= new Date(dateOutInput.value)) {
            return;
        }

        const res = {
            firstName: firstNameInput.value,    
            lastName: lastNameInput.value,
            inDate: dateInInput.value,
            outDate: dateOutInput.value,
            guests: Number(guestsInput.value),
        }


        //creating elements
        const liElement = document.createElement('li');
        liElement.className = 'reservation-content';
        const article = document.createElement('article');
        const h3Name = document.createElement('h3');
        h3Name.textContent = `Name: ${res.firstName} ${res.lastName}`;
        const pFrom = document.createElement('p');
        pFrom.textContent = `From date: ${res.inDate}`;
        const pTo = document.createElement('p');
        pTo.textContent = `From date: ${res.outDate}`;
        const guests = document.createElement('p');
        guests.textContent = `For ${res.guests} people`;
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);
        const continueBtn = document.createElement('button');
        continueBtn.className = 'continue-btn';
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', continueFunc);

        //append elements
        article.appendChild(h3Name);
        article.appendChild(pFrom);
        article.appendChild(pTo);
        article.appendChild(guests);

        liElement.appendChild(article);

        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        resContent.appendChild(liElement);

        //emptying fields
        firstNameInput.value = '';
        lastNameInput.value = '';
        dateInInput.value = '';
        dateOutInput.value = '';
        guestsInput.value = '';

        //disable button
        nextButton.disabled = true;

        //IF edit fill inputs with saved data
        function edit() {
            firstNameInput.value = res.firstName;
            lastNameInput.value = res.lastName;
            dateInInput.value = res.inDate;
            dateOutInput.value = res.outDate;
            guestsInput.value = res.guests;

            nextButton.disabled = false;
            liElement.remove();
        }

        function continueFunc() {
            confirmContent.appendChild(liElement);
            //remove old elements
            editBtn.remove();
            continueBtn.remove();

            const output = document.getElementById('verification');

            //create new buttons with functionality depending on cases
            //CONFIRM
            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'confirm-btn'
            confirmBtn.textContent = 'Confirm'
            confirmBtn.addEventListener('click', () => {
                liElement.remove();
                nextButton.disabled = false;
                output.className = 'reservation-confirmed';
                output.textContent = 'Confirmed.'
            });
            liElement.appendChild(confirmBtn);

            //CANCEl case
            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', () => {
                liElement.remove();
                nextButton.disabled = false;
                output.className = 'reservation-cancelled';
                output.textContent = 'Cancelled.'
            });
            liElement.appendChild(cancelBtn);
        }
    }
} */






