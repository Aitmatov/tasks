/*1) Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите
на экран строку 'a+b, c+d'.*/
let arr = ['a', 'b', 'c', 'd'];
alert(arr[0]+ '+' +arr[1]);
alert(arr[1]+ '+' +arr[3]);

/*
2) Создайте массив с элементами 10, 15, 9, 10.
- Умножьте первый элемент массива на второй,
    - а третий элемент на четвертый.
    Результаты сложите, присвойте переменной result.
    Выведите на экран значение этой переменной.*/

let num = [10,15,9,10];
let result = 10 * 15 + 9 * 10;
alert(result);

/*
3) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.*/
 let text = ['a', 'b', 'c'];
 text.push(1,2,3);
 console.log(text);

/*
4) Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла пройдитесь по каждому из них и у умножьте на 2.*/
let number1 = [1,2,3,4,5,6,7,8,9];
for (let i = 0; i < 9; i++){
    console.log(number1[i]*2)
}