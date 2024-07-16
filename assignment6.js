do {
  let numbers = prompt("Enter 4 digit code");
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum = sum + parseInt(numbers.charAt(i));
  }
  console.log(sum);

  function isSum() {
    return sum > 20 ? true : false;
  }

  function isEven() {
    return parseInt(numbers) % 2 == 0 ? true : false;
  }

  function isValid() {
    console.log(
      isSum() && isEven()
        ? (alert("calculator is accessible"), cal())
        : "calculator not accessible"
    );
  }

  isValid();

  function cal() {
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
  }
} while (prompt("Do u want to continue") === "yes");
console.log("GoodBye!!");
