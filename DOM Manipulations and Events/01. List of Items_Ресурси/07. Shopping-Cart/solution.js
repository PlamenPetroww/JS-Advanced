function solve() {

   let shoppingCart = document.getElementsByClassName('shopping-cart')[0];
   let result = document.getElementsByTagName('textarea')[0];

   let product = [];
   let totalPrice = 0;

   let checkoutDone = false;

   shoppingCart.addEventListener('click', buy)

   function buy(e) {
      if (e.target.nodeName !== "BUTTON") {
         return;
      }

      if(checkoutDone) {
         return;
      }

      let btn = e.target;
      
      if (Array.from(btn.classList).indexOf('add-product') >= 0) {
         let productElement = e.target.parentElement.parentElement;
         let name = productElement.querySelectorAll('.product-title')[0].textContent;
         let price = productElement.querySelectorAll('.product-line-price')[0].textContent;
         
         result.textContent += `Added ${name} for ${price} to the cart.\n`;
         if (product.indexOf(name) < 0) {
            product.push(name);
            totalPrice += Number(price);
         } else if(Array.from(btn.classList).indexOf('checkout') >= 0) {
            let list = product.join(', ');
            result.textContent += `You bought ${list} for ${totalPrice}`
            checkoutDone = true;
         }

      }
   };
}
