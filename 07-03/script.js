/*
1) Напишите функцию showNotification(options), которая создаёт уведомление:
    <div class="notification"> с заданным содержимым.
    Уведомление должно автоматически исчезнуть через 1,5 секунды.

    Пример объекта options:
    // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
    showNotification({
        html: "Hello!",      // HTML-уведомление
        className: "welcome" // дополнительный класс для div (необязательно)
    }*/


let notification= document.querySelector('.notification')

function showNotification(className,html) {
        alert('Hello')
}
setTimeout (() => {
    notification.close()
},1500);
setInterval(() => {
    showNotification({
        html: 'hello' + i++,
        className: 'Welcome'
    });
},1000);




















