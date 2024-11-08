// div внутри корзины в который мы добавляем товары
const cartWrapper = document.querySelector(".cart-wrapper");
//отслеживаем клик на странице
window.addEventListener("click", function(event){

    //Проверка что клик сделан по кнопке добавить в корзину
    if (event.target.hasAttribute('data-cart')){
        //Находим карточку товара внутри которой был сделан клик
        const card = event.target.closest(`.card`)
        // Соберем все данные в одну пепеременную
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector(`.product-img`).getAttribute("src"),
            title: card.querySelector(`.item-title`).innerText,
            itemsInbox: card.querySelector(`[data-items-in-box]`).innerText,
            weight: card.querySelector(`.price__weight`).innerText,
            price: card.querySelector(`.price__currency`).innerText,
            counter: card.querySelector(`[data-counter]`).innerText,
        };


		//проверка есть ли уже такой товар в корзине
		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
		//Если товар есть в корззине 
		if(itemInCart){
			const counterEl = itemInCart.querySelector('[data-counter]');
			counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter);
		} else{
			//если товара нет в корзине
		

        //Подставим в шаблон собранные данные
        const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
								<div class="cart-item__top">
									<div class="cart-item__img">
										<img src="${productInfo.imgSrc}" alt="">
									</div>
									<div class="cart-item__desc">
										<div class="cart-item__title">${productInfo.title}</div>
										<div class="cart-item__weight">${productInfo.itemsInbox} / ${productInfo.weight}</div>

										<!-- cart-item__details -->
										<div class="cart-item__details">

											<div class="items items--small counter-wrapper">
												<div class="items__control" data-action="minus">-</div>
												<div class="items__current" data-counter="">${productInfo.counter}</div>
												<div class="items__control" data-action="plus">+</div>
											</div>

											<div class="price">
												<div class="price__currency">${productInfo.price}</div>
											</div>

										</div>
										<!-- // cart-item__details -->

									</div>
								</div>
							</div>`;
        //отобразим товар в корзине
        cartWrapper.insertAdjacentHTML(`beforeend`, cartItemHTML);
		
		}
		//сбрасываем счетчик добавленного твара
		card.querySelector('[data-counter]').innerText = '1';
		
		//отоброжение статуса корзины пустая или нет
		toggleCartStatus();
		calcCartPrice();
    }
});
