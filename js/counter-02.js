// Добавляем прослушку на всем окне
window.addEventListener(`click`, function(event){
    console.log("click window")

    console.log(event.target)
    //Проверяем является ли элемент кнопкой плюс
    if (event.target.dataset.action === "plus") {
        //Ищем ближайшего родителя с классом counter-wrapper (обертка счетчика)
        const counterWrapper = event.target.closest(`.counter-wrapper`);
        //Ищем див с числом счетчика
        const counter = counterWrapper.querySelector(`[data-counter]`);
        counter.innerText = ++counter.innerText;
    }
    //Проверяем является ли элемент кнопкой минус
    if (event.target.dataset.action === "minus") {
       //Ищем ближайшего родителя с классом counter-wrapper
        const counterWrapper = event.target.closest(`.counter-wrapper`);
        //Ищем див с числом счетчика
        const counter = counterWrapper.querySelector(`[data-counter]`);
          //проверяем счетчик чтобы был больше 1
         if(parseInt(counter.innerText) > 1){
        //изменяем текст в счетчике уменьная на 1
        counter.innerText = --counter.innerText;}

    }

});



