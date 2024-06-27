let firstNum = parseInt(prompt("Enter a number"));
let SecondNum = parseInt(prompt("Enter a second number"));

let operator = prompt("Choose : +  -  *  /");

function add(firstNum, SecondNum) {
  return firstNum + SecondNum;
}
function subt(firstNum, SecondNum) {
  return firstNum - SecondNum;
}
function mul(firstNum, SecondNum) {
  return firstNum * SecondNum;
}
function div(firstNum, SecondNum) {
  return firstNum / SecondNum;
}

if (operator === "+") {
  let sum = add(firstNum, SecondNum);
  alert(`Your answer is ${sum}`);
} else if (operator === "-") {
  add(firstNum, SecondNum);
  alert(`Your answer is ${add}`);
} else if (operator === "*") {
  add(firstNum, SecondNum);
  alert(`Your answer is ${add}`);
} else if (operator === "/") {
  add(firstNum, SecondNum);
  alert(`Your answer is ${add}`);
} else {
  alert("Wrong input");
}
