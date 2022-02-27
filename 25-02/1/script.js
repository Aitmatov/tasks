/*1) Создайте массив с числами. Перебирая элементы созданного массива с помощью
цикла выведите только те элементы массива, которые больше нуля и меньше 10.*/
let number3 =[2,3,5,6,9,7,1,4,8,9,10];
for( let i = 0; i < number3.length; i++){
    console.log(number3[i]);
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




/******* №4********/
let otvet = prompt('Who is come?');
    if(otvet === 'Admin'){
        alert('Welcome!');
    }else if(otvet === "null" ){
        alert('I do not know you');
    }else{
        alert('I am sorry');
    }
let otvet1 =prompt('pasword');
    if(otvet1 ==='good123'){
        alert("Goodman")
    }else if(otvet1 === 'null'){
        alert("I did not understand")
    }else{
        alert("haha")
    }












/*
if(otvet === 'Admin'){
        alert('Welcome!');
    }
    if(otvet1 === 'melis89'){
    alert('Are you clever');
    } else if(otvet === "null" ){
        alert('I do not know you');
    } else{
        alert('I am sorry');
    }else if(otvet1 === 'null') {
        alert('entry canceled');
    } else(otvet1 === 'null'){
        alert("error password ");
   }
*/



