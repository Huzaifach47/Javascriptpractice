let firstNum = Number(prompt("Enter first number"));
let secondNum = Number(prompt("Enter Second number"));
let thirdNum = Number(prompt("Enter third number"));

function add(firstNum, secondNum, thirdNum) {
  return firstNum + secondNum + thirdNum;
}
let sum = add(firstNum, secondNum, thirdNum);

alert(`your answer is ${sum}`);

function average(firstNum, secondNum, thirdNum) {
  return firstNum + secondNum + thirdNum / 3;
}
let avg = average(firstNum, secondNum, thirdNum);
alert(`The average is ${avg}`);
