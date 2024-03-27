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