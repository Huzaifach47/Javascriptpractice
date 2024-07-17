let firstNum = parseInt(prompt("Enter a number"));
let secondNum = parseInt(prompt("Enter a second number"));

let operator = prompt("Choose: +, -, *, /");

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subt(firstNum, secondNum) {
  return firstNum - secondNum;
}

function mul(firstNum, secondNum) {
  return firstNum * secondNum;
}

function div(firstNum, secondNum) {
  return firstNum / secondNum;
}

if (operator === "+") {
  let sum = add(firstNum, secondNum);
  alert(`Your answer is ${sum}`);
} else if (operator === "-") {
  let subtraction = subt(firstNum, secondNum);
  alert(`Your answer is ${subtraction}`);
} else if (operator === "*") {
  let multiply = mul(firstNum, secondNum);
  alert(`Your answer is ${multiply}`);
} else if (operator === "/") {
  let division = div(firstNum, secondNum);
  alert(`Your answer is ${division}`);
} else {
  alert("Wrong input");
}
