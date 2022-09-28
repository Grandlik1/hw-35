// Собрать данные с формы при ее сабмите
// Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)
// Создать второй html файл, в котором списком (ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее
// Если данных нет, то показать соответствующее сообщение

'use strict';

void function() {

    const formSelector = '#form';
    const form = document.querySelector(formSelector);

    const searchInputs = element => {
        const data = element.querySelectorAll('input, textarea, select');
        return Array.from(data);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const data = searchInputs(event.target)
            .reduce((acc, input) => {
                acc[input.name] = input.value;
                return acc;
            }, {});


        localStorage.setItem(
            formSelector,
            JSON.stringify(data)
        );
        window.location.replace('./pages/newPage.html');
    }
    form
        .addEventListener('submit', submitHandler)


}()