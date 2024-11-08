////отоброжение статуса корзины пустая или нет
function toggleCartStatus(){
const cartWrapper = document.querySelector('.cart-wrapper');
const cartEmpyBadge = document.querySelector('[data-cart-empty]') ;  
const orderForm = document.querySelector('#order-form');

   if (cartWrapper.children.length > 0 ){
    cartEmpyBadge.classList.add('none');
    orderForm.classList.remove('none');
   } else  cartEmpyBadge.classList.remove('none');
   
   
};