function solve() {
    
    // Values

    let firstNameElement = document.querySelector('#fname');
    let lastNameElement = document.querySelector('#lname');
    let emailElement = document.querySelector('#email');
    let dateOfBirthElement = document.querySelector('#birth');
    let positionElement = document.querySelector('#position');
    let salaryElement = document.querySelector('#salary');
    let inputElement = document.getElementById('tbody');
    let totalSum = document.querySelector('#sum');
    let totalSalary = 0;
    

    // Buttons

    let addWorkersButton = document.querySelector('#add-worker');
    addWorkersButton.addEventListener('click', workerAdd);
    /* let firedWorkerButton = document.getElementsByClassName('fired');
    firedWorkerButton.addEventListener('click', fired); */
    

    // Functions
    
    function workerAdd(e) {
        e.preventDefault()
        
        let firstName = firstNameElement.value;
        let lastName = lastNameElement.value;
        let email = emailElement.value;
        let dateOfBirth = dateOfBirthElement.value;
        let position = positionElement.value;
        let salary = salaryElement.value;

        if(firstName == '' || lastName == '' || email == '' || dateOfBirth == '' || position == '' || salary == '') {
            return
        }

        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        dateOfBirthElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        let tableRow = document.createElement('tr');

        let td1Element = document.createElement('td');
        td1Element.textContent = firstName;

        let td2element = document.createElement('td');
        td2element.textContent = lastName;

        let td3element = document.createElement('td');
        td3element.textContent = email;

        let td4element = document.createElement('td');
        td4element.textContent = dateOfBirth;

        let td5element = document.createElement('td');
        td5element.textContent = position;

        let td6element = document.createElement('td');
        td6element.textContent = salary;

        let td7Element = document.createElement('td');

        let firedButton = document.createElement('button');
        firedButton.classList.add('fired');
        firedButton.textContent = 'Fired';
        firedButton.addEventListener('click', fired)
        
        
        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', edit)

        // Total Salary
        let currentSalary = Number(totalSum.textContent);
        totalSalary = currentSalary + Number(salary);
        totalSum.textContent = totalSalary.toFixed(2);

        firedButton.addEventListener('click', fired);
        editButton.addEventListener('click', edit);

        // DOM

        tableRow.appendChild(td1Element);
        tableRow.appendChild(td2element);
        tableRow.appendChild(td3element);
        tableRow.appendChild(td4element);
        tableRow.appendChild(td5element);
        tableRow.appendChild(td6element);
        td7Element.appendChild(firedButton);
        td7Element.appendChild(editButton);
        tableRow.appendChild(td7Element)

        
        inputElement.appendChild(tableRow);
        
    }

    function edit(e) {
        let currentWorker = e.target.parentElement.parentElement;
        let editedWorkers = e.target.parentElement.parentElement.children;

        let firstNameValue = editedWorkers[0].textContent;
        let lastNameValue = editedWorkers[1].textContent;
        let emailValue = editedWorkers[2].textContent;
        let dateOfBirthValue = editedWorkers[3].textContent;
        let positionValue = editedWorkers[4].textContent;
        let salaryValue = editedWorkers[5].textContent;
        salaryValue = Number(salaryValue)
        

        firstNameElement.value = firstNameValue;
        lastNameElement.value = lastNameValue;
        emailElement.value = emailValue;
        dateOfBirthElement.value = dateOfBirthValue;
        positionElement.value = positionValue;
        salaryElement.value = Number(salaryValue);
        // Delete the last worker input

        totalSum.textContent = (totalSalary - salaryValue).toFixed(2);
        currentWorker.remove()
    }
    function fired(e) {
        e.preventDefault()
        
        let firedWorker = e.target.parentElement.parentElement;
        let isFiredSalary = e.target.parentElement.parentElement.children[5].textContent;
        isFiredSalary = Number(isFiredSalary);
        salaryElement.value = Number(isFiredSalary);

        totalSum.textContent = (totalSalary - isFiredSalary).toFixed(2);
        salaryElement.value = '';
        firedWorker.remove();
    }


}
solve()