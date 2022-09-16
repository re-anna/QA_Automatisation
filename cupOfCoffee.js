//*Home work 2:

//2.1 Напишите следующую программу:

//- У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
//- Дайте названия вашим видам кофе.
//- Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
//- Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
//- Компоненты кофе не влияют на стоимость.
//- Используйте подходящую комбинацию условий if, (else if), else для решения задачи.

let cupSize;
let smallCup="small cup";
let mediumCup="medium cup";
let bigCup="large cup";
let water;
let hotWater="hot water";
let coldWater="cold water";
let price = 5;
let coffeeType;
let latte="Latte";
let icedCoffee="Iced Coffee";

coffeeType = icedCoffee;
cupSize = smallCup;

if (coffeeType == icedCoffee){
  water = coldWater
}
  else {
    water == hotWater
  }

if (cupSize == mediumCup){
  price*=1.5
}
else if (cupSize == bigCup){
  price*=2
}
  

let order = `Make a ${cupSize} of ${coffeeType}:`;
let step1 = `1. Take a ${cupSize}`;
let step2 = `2. Put 2 spoons of coffee in it`;
let step3 = `3. Pour ${water} in a cup with coffee`;
let step4 = `4. Pour milk in a cup with coffee`;
let step5 = `5. Stir coffee in a cup with a spoon`;
let orderPrice = `The order price is ${price}`;
let result = `Enjoy your coffee!^_^`

console.log(order, step1, step2, step3,step4, step5,orderPrice, result);