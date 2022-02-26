/*1) Создайте массив с числами. Перебирая элементы созданного массива с помощью
цикла выведите только те элементы массива, которые больше нуля и меньше 10.*/
let number =10;
for( let i = 0; i < 10; i++){
    console.log(i);
}
/*2) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
С помощью цикла надо найти сумму элементов этого массива.*/
let numbers = [1,2,5,6,88,5];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers.length[i]);
}
/*3) Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
    Квадрат числа 5 будет 25.*/
let number1 = [1,56,7,96,24,5,9,67,24,];
for(let i = 0; i < 10; i++){
    console.log(number1[5]**2);
}

let otvet = prompt('Who is come?');
let otvet1 =prompt('pasword');
    if(otvet === 'Admin' && otvet1 === 'melis89'){
        alert('Welcome');
    } else if( 'other') {
        alert('I do not know you');
    } else{
        alert('I am sorry');
    }



