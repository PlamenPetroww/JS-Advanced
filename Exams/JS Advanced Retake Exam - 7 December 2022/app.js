class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace,
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if(typeof product !== 'string' || typeof quantity !== 'number' || typeof spaceRequired !== 'number') {
            return;
        }

        if(spaceRequired > this.warehouseSpace) {
            return `Not enough space in the warehouse.`
        }
        this.products.push({
            product,
            quantity,
        })
        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`

    }

    quantityCheck(product, minimalQuantity) {

        if(typeof minimalQuantity !== 'number') {
            return;
        }
        let currentProduct = this.products.find(p => p.product === product);
        if(!currentProduct) {
            throw new Error (`There is no ${product} in the warehouse.`);
        }
        if(minimalQuantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`);
        }
        if(minimalQuantity <= currentProduct.quantity) {
            return `You have enough from product ${product}.`
        }
        currentProduct.quantity = minimalQuantity - currentProduct.quantity;
        return `You added ${currentProduct.quantity} more from the ${product} products.`
    }

    sellProduct(product) {
        let currentProduct = this.products.find(p => p.product === product) 

        if(!currentProduct) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
        currentProduct.quantity--;
        this.sales += 1;
        return `The ${product} has been successfully sold.`
    }

    revision(){
        
        let soldedProcucts = this.sales.length;

        if(soldedProcucts === 0) {
            throw new Error(`There are no sales today!`);
        }

        const result = [
            `You sold ${soldedProcucts} products today!`,
            'Products in the warehouse:',
        ];
        this.products.forEach((p) => result.push(`${p.product}-${p.quantity} more left`));
        return result.join('\n');
        
    }

}

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse.
// Uncaught Error Error: Not enough space in the warehouse.

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));


// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse. 
// You have enough from product headphones. 
// You added 5 more from the laptop products.
// Uncaught Error Error: There is no TV in the warehouse.

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse. 
// You have enough from product headphones. 
// You added 5 more from the laptop products. 
// The headphones has been successfully sold. 
// The laptop has been successfully sold.
// Uncaught Error Error: There is no keyboard in the warehouse.

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

// The headphones has been successfully delivered in the warehouse. 
// The laptop has been successfully delivered in the warehouse. 
// You have enough from product headphones. 
// You added 5 more from the laptop products. 
// The headphones has been successfully sold. 
// The laptop has been successfully sold. 
// You sold 2 products today!
// Products in the warehouse: 
// headphones-9 more left 
// laptop-9 more left



