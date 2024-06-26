let x = parseInt(prompt("Enter a number"));
let y = parseInt(prompt("Enter a second number"));

let operator = prompt("Choose : +  -  *  /");

if (operator === "+") {
  let sum = x + y;
  alert(`Your answer is ${sum}`);
} else if (operator === "-") {
  let subt = x - y;
  alert(`Your answer is ${subt}`);
} else if (operator === "*") {
  let mul = x * y;
  alert(`Your answer is ${mul}`);
} else if (operator === "/") {
  let div = x / y;
  alert(`Your answer is ${div}`);
} else {
  alert("Wrong input");
}
