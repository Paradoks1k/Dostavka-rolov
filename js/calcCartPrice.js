function calcCartPrice(){
        const cartWrapper = document.querySelector(".cart-wrapper");
        const priceElements = cartWrapper.querySelectorAll('.price__currency');
        const totalPriceEl = document.querySelector('.total-price');
        const deliveryCost = document.querySelector('.delivery-cost');
        const cartDelivery = document.querySelector('[data-cart-delivery]');
       
        //общая стоимость товара
        let priceTotal = 0;
    //обходим все блоки с ценами в корзине
        priceElements.forEach(function(item) {
            //находим количество товаров
            const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
            //добавляем стоимость товаров в общую стоимость
            priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
        });
         //Отображаем цену на странице
     totalPriceEl.innerText = priceTotal;



     if (priceTotal > 0){
        cartDelivery.classList.remove('none');
     } else {
        cartDelivery.classList.add('none');
     }

     if (priceTotal>= 600){
        deliveryCost.classList.add('free');
        deliveryCost.innerText = "бесплатно";

     }else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = "250 ₽";
     }

};
   