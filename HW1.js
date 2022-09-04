// 1.1 Объявите две переменные: firstName и lastName.
// 1.2 Запишите строку “John”в переменную firstName и строку “Adams”  в переменную lastName.

let firstName="John";
let lastName="Adams";

// 1.3 Выведите на экран значение firstName и lastName (должно показать John Adams).
console.log(firstName, "", lastName);

//1.4 Используйте те же переменные firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).
//В итоге на экране должно быть две строки:
//John Adams
//Anna Karenina
firstName="Anna";
lastName="Karenina";
console.log(firstName+" "+lastName);


// 1.5 Напишите алгоритм приготовления кофе и выведите его на экран
/*Data: water,cup,coffee,spoon 
water: hot, 200 ml 
spoon: tea spoon 
coffee: ground
cup: 250 ml 
milk: 20 ml 

Task: Make a cup of coffee

Steps:
1. Take a cup 
2. Put 1 spoon of coffee in it 
3. Pour water in a cup with coffee
4. Pour milk in a cup of coffee
5. Stir coffee in a cup with a spoon */

let task="Make a cup of coffee";
let step1="1. Take a cup";
let step2="2. Put 1 spoon of coffee in it";
let step3="3. Pour water in a cup with coffee";
let step4="4. Pour milk in a cup of coffee";
let step5="5. Stir coffee in a cup with a spoon */";
document.write(task+"<br>"+step1+"<br>"+step2+"<br>"+step3+"<br>"+step4+"<br>"+step5);