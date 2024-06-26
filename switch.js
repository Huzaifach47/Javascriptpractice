let x = parseInt(prompt("Enter a number"));
let y = parseInt(prompt("Enter a second number"));

let operator = prompt("Choose : +  -  *  /");

switch (operator) {
  case "+":
    let sum = x + y;
    alert(`your answer is ${sum}`);
    break;

  case "-":
    let subt = x - y;
    alert(`your answer is ${subt}`);
    break;

  case "*":
    let mul = x * y;
    alert(`your answer is ${mul}`);
    break;

  case "/":
    let div = x / y;
    alert(`your answer is ${div}`);
    break;

  default:
    alert("Wrong imput");
    break;
}
