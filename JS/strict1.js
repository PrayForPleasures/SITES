// 1 Numbers

//const num = 42; //int
//const float = 412.41; // float
//const pow = 10e3; // 10000
//console.log(num, float, pow);
//console.log(Number.MAX_SAFE_INTEGER) //иакм инт для безопасной работы
//console.log(Math.pow(2, 53) - 1); //число, степень
//console.log(Number.MAX_VALUE);// максимально большое число котолрое в js может быть
//console.log(Number.NEGATIVE_INFINITY);//позитивная бесконечность
//console.log(Number.POSITIVE_INFINITY);//негативная бесконечность
//console.log(2 / 0); результат позитивная бесконечность
//console.log(Number.NaN); // not a number хоят в консоли намбэр
//const weird = 2 / undefined;
//console.log(weird);
//console.log(isNaN(weird)); //является ли число наном
//console.log(Number.isFinite(42)); //является ли число конечным
//const int = "42";
//const float = "42.42";
//console.log(parseInt(int) + 4); // - изменение типа инт в стринг
//console.log(parseFloat(float) + 7);
//console.log(0.4 + 0.2); // 0.6000000000000001
//console.log(parseFloat((0.2 + 0.2).toFixed(2))); // кол-во знаков после запятой

// 2 BIG INT //

//console.log(typeof 23875892237049438521424346378462454123564329215n); // - biging n на конце / bigint работает только с бигинтами и только целочисленные

// 3 MATH //

//console.log(Math.E); // экспонента
//console.log(Math.PI); // пи
//console.log(Math.sqrt(25)); // квадратный корень
//console.log(Math.pow(5, 3)); // число, степень
//console.log(Math.abs(-42)); // модуль числа
//console.log(Math.max(42, 12, 64, -23)); // максимальное число
//console.log(Math.min(-13, -33, 32, 15, 4)); // минимальное число
//console.log(Math.floor(4.9)); // округление в меньшую сторону
//console.log(Math.ceil(4.4)); // округление в большую сторону
//console.log(Math.round(4.5)); // округление
//console.log(Math.trunc(4.2)); // убирает дробную часть числа
//console.log(Math.random(1, 100)); // рандомно от 0 до 1

// Example //

//function getRandomBetween(min, max) {
//  return Math.random() * (max - min) + min;
//}
//console.log(Math.round(getRandomBetween(12, 820))); // функия на рандомное целое число

// Strings //

//const name = "Dmitriy";
//const age = 31;
//function getAge() {
//  return age;
//}
//const output = `Hi, my name is ${name} and I'm ${getAge()}!`;
//const output = `Hi, my name is ${name} and I'm ${
//  age === 31 ? "31" : "не гони"
//}!`; // использование тернарных выражений в `` допускается как и вызов функции, а также сохраняются все переносы энтэры и т.д.
//console.log(output);
//const name = "   Dmitriy     ";
//console.log(name.length); // длинна
//console.log(name.toUpperCase(name)); // верхний регистр
//console.log(name.charAt(2)); // в какой ячейке символ
//console.log(name.indexOf("mit")); // с какой ячейки идёт совпадение
//console.log(name.indexOf("ewq")); // КОГДА ОТСУТСТВУЕТ СИМВОЛ ВЫДАЁТ -1 - можно это использовать
//console.log(name.startsWith("Dmi")); // стартует ли строкас символов написанных нами
//console.log(name.repeat(4)); // повторение 4
//console.log(name.trim()); // убирает все пробелы
//console.log(name.trimRight());
//console.log(name.trimLeft());

//function infoAboutPerson(s, name, age) {
//  if (age < 0) {
//    age = "u wasn't born yet";
//  }
//  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
//}
//const person1 = "Mosoo";
//const person2 = "Zhir";
//const personage1 = 26;   // альтернативный вариант вывода строк (к функции обращаемся как к эл-там массива)
//const personage2 = -24;
//const output = infoAboutPerson`name: ${person1}, age: ${personage1}!`;
//const output2 = infoAboutPerson`name: ${person2}, age: ${personage2}!`;
//console.log(output);
//console.log(output2);

// Functions //

// Function Declaration // - можно использовать до объявления констант где угодно и откуда угодно обращаться
//function fName(name) {
// console.log("hi, ", name);
//}
// Function Expression // - можно использовать только перед объявленными переменными грубо говоря
//const fName2 = function fName2(name2) {
//  console.log("hi, ", name2);
//};
//fName("Tanya");
//fName2("Marina");

// Анонимная функция внутри //

//let counter = 0;
//setInterval(function () {
// счетчик
//  console.log(++counter);
//}, 1000);

//let counter = 0;
//const interval = setInterval(function () {
//  if (counter > 7) {
//    console.log("that's it");
//    clearInterval(interval);
//  } else {
//    console.log(++counter); // счетчик
//  }
//}, 1000);

// СТРЕЛОЧНЫЕ ФУНКЦИИ //

// эти записи одинаковы :
/* function pig(name) {
   console.log(name);
}
pig("Oksana");
const pig2 = (name) => {
  console.log(name);
};
pig2("Oksana");
const pig3 = (name) => console.log(name); // если ф-я сост из 1 строки - можно не выводить фигурные скобки
pig3("Oreheya");
*/
//const pow2 = (num) => num ** 2; // - возведение в квадрат
//console.log(pow2(5));

// Параметры по умолчанию //

/*function sumAll(...all) {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  return result;
}
const res = sumAll(1, 2, 3, 4, 5, 6, 7);
console.log(res);*/

// ЗАМЫКАНИЯ //
/*function createMember(name) { // - приватная переменная создается здесь, т.к. в js нет функции создания приватноей переменной
  return function lName(lastName) {
    console.log(name + " " + lastName);
  };
}
const logWithLastName = createMember("Dmitriy");
console.log(logWithLastName("Yarckiy"));*/

// Массивы //

/*const cars = ["mazda", "ford", "honda", "bmw"];
cars[cars.length] = "suzuki";
console.log(cars);*/
/*let a = 4;
let b = 2;
if (a % b === 0) {
  console.log("чётное");
} else {
  console.log("нечетное");
}*/

/*let mas = [1, 5, 3, 777];
console.log(mas);
console.log(mas[mas.length - 1]); // show last el of mas
mas.push(323); // add elem mas
console.log(mas);
console.log(mas[mas.length - 1]);
mas.pop(); // del last el mas
console.log(mas);
mas.shift(); // del first el mas
console.log(mas);
mas.unshift(5151515);
console.log(mas);
console.log(mas[2], mas[3]);*/ // обращение по индексу к эл-ту массива

/*let arr = ["Vasia", "is", 27, "!"];
console.log(arr.join(" ")); // объединяет эл-ты массива в цельную строку
console.log(arr.reverse().join(" "));*/ // в обратном порядке

/*let input = prompt('Ent nrs thrue the "," '); // функция доступна только в браузерах
let arr = input.split(","); // функция сплит разбивает через указанный символ строку

for (let i = 0; i < arr.length; i = i + 1) {
  arr[i] = +arr[i];
}

let result = arr[0];

for (let i = 1; i < arr.length; i = i + 1) {
  if (arr[i] > result) {
    result = arr[i];
  }
}
console.log(result);*/
let k = 35;
let a;
let bid;
let wdol;
let cred = 1000;
let choose = prompt("choose yr destiny");
function getRandomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

console.log("Welcome to Roulette! Your credit is: 1000$!");
console.log("1 - choose color, 2 - choose number, 3 - quit :(");

if (choose == "1") {
  console.log("{ choose yr color: }");
  let ch2 = prompt("{ 1 - black / 2 - red }");
  bid = prompt("enter yr bid: ");
  if (bid > cred) {
    console.log(" U haven't to much money! Yr money: " + cred + "$");
  } else if (ch2 == Math.round(getRandomBetween(1, 2))) {
    wdol = parseInt(bid) * 2;
    cred = cred + parseInt(wdol);
    console.log("U r guessed right! ");
    console.log("!!! My Congratulations!!! Yr bid mult x2!!! " + wdol + "$!!!");
    console.log("Yr credit is: " + cred + "$");
  } else {
    cred = cred - parseInt(bid);
    console.log("Yr credit is: " + cred + "$");
    console.log("U r not guessed right! ");
    console.log("I think better luck next time, try again!");
  }
}
if (choose == "2") {
  console.log("{ choose number from 0 to 36 }");
  let ch = prompt("enter yr number: ");
  bid = prompt("enter yr bid: ");
  if (bid > cred) {
    console.log(" U haven't to much money! Yr money: " + cred + "$");
  }
  if (ch == Math.round(getRandomBetween(0, 36))) {
    wdol = parseInt(bid) * k;
    cred = cred + parseInt(wdol);
    console.log(
      "!!! My Congratulations!!! Yr bid mult x35!!! " + wdol + "$!!!"
    );
    console.log("Yr credit is: " + cred + "$");
  } else {
    cred = cred - parseInt(bid);
    console.log("Yr credit is: " + cred + "$");
    console.log("I think better luck next time, try again!");
  }
}
if (choose == "3") {
  console.log("Good bye, my dear friend =(");
}

//let bid = prompt("Bid for one throw from 0$ to 36$, your bid is: ");

// console.log("Yr bid more then yr credit and max bid's price, try again");
//bid = prompt("Bid for one throw from 0$ to 36$, your bid is: ");

// DO WHILE MATH RANDOM //

/*let a;
let vari = 5;
do {
  a = Math.round(Math.random() * 10);
  if (vari > a) {
    console.log(">");
  } else if (vari < a) {
    console.log("<");
  }
} while (vari != a);
console.log("gg");*/
