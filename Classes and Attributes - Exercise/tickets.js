function ticketSorter(tickets, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    };
    let result = [];

    for(let item of tickets) {
        let [destination, price, status] = item.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    };
    result.sort((a, b) => {
        if(typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting])
        }
    });
    return result;
}
ticketSorter(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status')