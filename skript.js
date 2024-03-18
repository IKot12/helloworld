//1
let a = 10;
alert(a);
a = 20;
alert(a);

//2
const iPone = 2007;
alert(iPone);

//3
const mAsterjs = "BrendanEich";
alert(mAsterjs);

//4
let x = 10, y = 2;
alert(x - y);
alert(x + y);
alert(x * y);
alert(x / y);

//5
const result = 2 ** 5;
alert(result);

//6
let b = 9%2;
alert(b);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

//8
let age = prompt('Сколько вам лет?');
alert(age);

//9
let user = {
    name : 'Victor',
    age : 27,
    isAdmin: true
};

user = "New York";

user.age = 35;

delete user["city of residence"];

let info = ["Какую информацию хотите узнать о пользователе?"];
alert(user[info]);

let userName = prompt ("Как вас зовут?");
alert (`Привет, ${userName}!`);


2.2 

//1

let password = 'пароль';

let userInput = prompt('Введите пароль');

if (userInput === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неверно');
}

//2
let c = 0;

if (c > 0 && c < 10) {
    console.log('Вверно');
} else {
    console.log('Неверно');
}

//3

let d = 101;
let e = 50;

if (d > 1010 || e < 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//4 

let m = '2';
let l = '3';

alert(+ m + + l);

//5

let monthNumder = 12;

switch (monthNumder) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.lof('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.lof('Осень');
        break;
    case 9:
    case 10:
    case 11:
        console.lof('Зима');
        break;
    default:
        alert('Неизвестный месяц')
        break;
}

//2.4

//1

for (let i = 0; i < 2; i++) {
    console.log("Привет");
}

//2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//3

for (let i = 7; i < 22; i++) {
    console.log(i);
}

//4

let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400",
}

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`)
}

//5

let n = 1000;
let number = 0;

while (n >= 50) {
    n /= 2;
    number++
}

console.log(n);
console.log(number);

//6

let firstFriday = 5
for (let i = firstFriday; i <= 31; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо сдать отчет.`)
}