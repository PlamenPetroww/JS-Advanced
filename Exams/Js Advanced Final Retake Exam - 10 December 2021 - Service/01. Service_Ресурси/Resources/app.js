window.addEventListener('load', solve);

function solve() {

    // Buttons
    
    let sendButtonElement = document.querySelector('#right form button');
    sendButtonElement.addEventListener('click', sending)
    let clearButton = document.querySelector('#completed-orders button');
    clearButton.addEventListener('click', cleanUp)

    // Values

    let typeProductElement = document.querySelector('#type-product');
    let descriptionFieldElement = document.querySelector('#description');
    let clientNameElement = document.querySelector('#client-name');
    let clientPhoneElement = document.querySelector('#client-phone');

    let receivedOrders = document.querySelector('#received-orders');
    let completedOrders = document.querySelector('#completed-orders');

    function sending(e) {
        e.preventDefault();

        let productType = typeProductElement.value;
        let description = descriptionFieldElement.value;
        let name = clientNameElement.value;
        let phone = clientPhoneElement.value;

        if(description == '' || name == '' || phone == '') {
            return;
        }

        typeProductElement.value = '';
        descriptionFieldElement.value = '';
        clientNameElement.value = '';
        clientPhoneElement.value = '';

        let divContainer = document.createElement('div');
        divContainer.classList.add('container');

        let h2Element = document.createElement('h2');
        h2Element.textContent = `Product type for repair: ${productType}`
        
        let h3Element = document.createElement('h3');
        h3Element.textContent = `Client information: ${name}, ${phone}`

        let h4Element = document.createElement('h4');
        h4Element.textContent = `Description of the problem: ${description}`

        let startButton = document.createElement('button');
        startButton.classList.add('start-btn');
        startButton.textContent = 'Start repair';

        let finishButton = document.createElement('button');
        finishButton.classList.add('finish-btn');
        finishButton.textContent = 'Finish repair';
        finishButton.disabled = true;

        startButton.addEventListener('click', startRepair);

        finishButton.addEventListener('click', finishRepair);

        divContainer.appendChild(h2Element);
        divContainer.appendChild(h3Element);
        divContainer.appendChild(h4Element);
        divContainer.appendChild(startButton);
        divContainer.appendChild(finishButton);

        receivedOrders.appendChild(divContainer);
    }

    function startRepair(e) {
        e.currentTarget.disabled = true;
        e.currentTarget.parentElement.querySelector('.finish-btn').disabled = false;
    }

    function finishRepair(e) {
        let containerDiv = e.currentTarget.parentElement;
        // Remove two buttons
        e.currentTarget.remove();
        containerDiv.querySelector('.start-btn').remove();

        containerDiv.remove();
        completedOrders.appendChild(containerDiv)
    }

    function cleanUp(e) {
        e.preventDefault()

        let allCointainer = Array.from(e.currentTarget.parentElement.querySelectorAll('.container'));

        for(let container of allCointainer){
            container.remove();
        }
    }
}