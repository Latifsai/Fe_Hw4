// 1. Напишите скрипт, который считает количество секунд 
//в часе, в сутках

let hours = prompt("Enter desired amount hours");
let days = prompt("Enter desired amount days");

let hoursInSeconds = hours * 60 * 60;
let daysInSeconds = days * 24 * 60 * 60;

console.log("In " + days + " days are " + daysInSeconds + " sedconds");
console.log("In " + hours + " hours are " + hoursInSeconds + " sedconds");

//Создайте переменную num и присвойте ей значение 3. 
//Выведите значение этой переменной на экран с помощью 
//метода alert.


let num = 3;
alert(num);

//Создайте переменные a=10 и b=2. Выведите на экран их сумму,
// разность, произведение и частное (результат деления).

let a = 10;
let b = 2;

console.log("total is: " + a + b);
console.log("diffference is: " + (a - b));
console.log("product is: " + a * b);
console.log("quotient is: " + a / b);


//Создайте переменные c=15 и d=2. Просуммируйте их, 
//а результат присвойте переменной result. 
//Выведите на экран значение переменной result.

let c =15; d = 2; result = c + d;
console.log("result is: " + result);

//Создайте переменные a=10, b=2 и c=5. 
//Выведите на экран их сумму.

let a1=10; b=2; c=5; 
console.log("total is: " + a1 + b + c);

//6.Создайте переменные a=17 и b=10. 
//Отнимите от a переменную b и результат присвойте переменной c.
//Затем создайте переменную d, присвойте ей значение 7. 
//Сложите переменные c и d, а результат запишите в переменную result.
// Выведите на экран значение переменной result.

let arg=17; arg2=10; 
let c1 = arg - arg2;
let d1 = 7;
let currentResult =  c1 + d1;
console.log("Result is: " + currentResult);

//Создайте переменную str и присвойте ей значение 'Привет, Мир!'. Выведите значение этой переменной на экран.

let str = "Hello,World!"
document.write(str);

//8 Создайте переменные str1='Привет, ' и str2='Мир!'. 
//С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

let str1="Привет,"; 
let str2 ="Мир!";
console.log(str1 + str2);

//9 Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%

let myName = "Latif";
alert("Servus " + myName);

//10 Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне %Возраст% лет!'.

let currentAge = prompt("How old are you?");
console.log("You are " + currentAge ); 

//11 сли переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.

let integers = prompt("Enter some numbers:");
if (integers == 0) {
    alert("Right");
}else{
    alert("False");
}

//12 Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.

let integers1 = prompt("Enter some numbers:");

if(integers1 > 0){
    alert("Right");
}else{
    alert("False");
}

//13 Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. 
//Проверьте работу скрипта при a, равном 1, 0, -3.

let integers2 = prompt("Enter some numbers:");

if(integers2 < 0){
    alert("Right");
}else{
    alert("False");
}






