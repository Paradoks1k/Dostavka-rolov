console.log("hello counter.js")
//Находим элементы нав странице
const btnMinus = document.querySelector(`[data-action="minus"]`);
const btnPlus = document.querySelector(`[data-action="plus"]`);
const counter = document.querySelector(`[data-counter]`);

//отслеживаем клик на кнопку минус
btnMinus.addEventListener("click", function(){
    //проверяем счетчик чтобы был больше 1
    if(parseInt(counter.innerText) > 1){
        //изменяем текст в счетчике уменьная на 1
        counter.innerText = --counter.innerText;}
});

//отслеживаем клик на кнопку плюс
btnPlus.addEventListener("click", function(){
    //изменяем текст в счетчике увеличивая на 1
    counter.innerText = ++counter.innerText;
});
