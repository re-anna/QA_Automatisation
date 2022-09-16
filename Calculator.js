let num1=2;
let num2=5;
let result;

let operator="*";

if (operator == "+"){
  result = num1+num2;
  console.log("Your summ is " + result);
} else if (operator == "-"){
  result = num1-num2;
  console.log("Your difference " + result);
  } else if (operator == "/"){
  result = num1/num2;
  console.log("Your division " + result);
  } else if (operator == "*"){
  result = num1*num2;
  console.log("Your multiplication " + result);
} else{
  console.log("Pease enter another operator")
};