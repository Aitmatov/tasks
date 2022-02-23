/*
1) Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.
*/

const userSalaries = {
    name1: 'Ella',
    name2:'Sophia',
    name3: 'Ellie'
}
console.log(`${userSalaries.name1}  ${userSalaries.name2}`);



/*
2) Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.
*/

let user = {
     a: '5',
     b: '6',
     c: '10'
}
console.log(user.a + user.b + user.c);


/*3) let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}*/
let data = true;
let number = data === true ? 3:5;
alert(number);


/*Используя конструкцию if..else, напишите код, который будет спрашивать: «Кто такой В.В.ПУТИН?».

Если посетитель вводит «Президент», то выводить «Верно!», если что-то другое – выводить «Не знаете?».*/


let name = prompt('Кто такой В.В.Путин?');

if (name === 'President'){
    alert("true")
}else{
    alert('False')
}

























