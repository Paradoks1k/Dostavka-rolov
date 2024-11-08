// Добавляем прослушку на всем окне
window.addEventListener(`click`, function(event){
    
    //Проверка клик на плюс или минус
    if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus"){
     //Ищем ближайшего родителя с классом counter-wrapper (обертка счетчика)
    const counterWrapper = event.target.closest(`.counter-wrapper`);
     //Ищем див с числом счетчика
    const counter = counterWrapper.querySelector(`[data-counter]`);

   
    //Проверяем является ли элемент кнопкой плюс
    if (event.target.dataset.action === "plus") {
        counter.innerText = ++counter.innerText;
    }
    //Проверяем является ли элемент кнопкой минус
    if (event.target.dataset.action === "minus") {
        
            // проверка на товар который на ходится в корзине
            //if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1)    {
            //удаляем товар из корзины
            //event.target.closest('.cart-item').remove();}
            
      //проверяем счетчик чтобы был больше 1
    if(parseInt(counter.innerText) > 1){
        //изменяем текст в счетчике уменьная на 1
        counter.innerText = --counter.innerText;
    } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
         //удаляем товар из корзины
         event.target.closest('.cart-item').remove();

         //отоброжение статуса корзины пустая или нет
		toggleCartStatus();
        calcCartPrice();
    }
   
    }
}
    //проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPrice();

    }

});



