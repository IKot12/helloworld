// 2.2

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
let b = 9 % 2;
alert(b);

//7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//8
let age = prompt('Сколько вам лет?');
alert(age);

//9
let user = {
    name: 'Victor',
    age: 27,
    isAdmin: true
};

user = "New York";

user.age = 35;

delete user["city of residence"];

let info = ["Какую информацию хотите узнать о пользователе?"];
alert(user[info]);

let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);

//2.3 

//1

let password = 'пароль';
let qyes = prompt('Введите пароль');

if (qyes === 'пароль') {
    console.log('Верно');
} else {
    console.log('неверно');

}

//2

let c = 2;

if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}


//3
let d = 102;
let e = 90;

if (d < 100 || e < 100) {
    console.log('правильно')
} else {
    console.log('не правильно')
}


//4


//5

let monthNumber = prompt('Ведите меcяц');
switch (monthNumber) {
    case '1':
        console.log('зима')
        break;
    case '2':
        console.log('зима')
        break;
    case '3':
        console.log('весна')
        break;
    case '4':
        console.log('весна')
        break;
    case '5':
        console.log('весна')
        break;
    case '6':
        console.log('лето')
        break;
    case '7':
        console.log('лето')
        break;
    case '8':
        console.log('лето')
        break;
    case '9':
        console.log('осень')
        break;
    case '10':
        console.log('осень')
        break;
    case '11':
        console.log('осень')
        break;
    case '12':
        console.log('зима')
        break;

    default:
        console.log('Нет такого месяца')
        break;
}




//2.4

//1 

let u = 0;

while (u < 2) {
    console.log('Привет')
    i++;
};


//2

let n = 1;

while ( n <= 5 ) {
    console.log(i);
    i++;
}

//3 

let i = 7;

while ( i <= 22 ) {
    console.log(i);
    i++;
}

//4 

const user = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};
for (let key in user) {
    console.log(`${key}, - зарплата ${user[key]} долларов`)
};


// 5 
let nume = 0;
let = i;

for (i = 1000; i >= 50; i = i / 2) {
  nume = nume + 1;
}

console.log('Количество итераций: ', num); 
console.log('Результат: ',i);


//6

for (let i = 2; i <= 31; i += 7) {
    console.log(`Сегодня пятница ${i}-е число. Необходимо подготовить отчет. `)
}






