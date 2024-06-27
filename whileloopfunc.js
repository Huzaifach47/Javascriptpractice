//  let x = 2;

// function century() {
//   while (x >= 1 && x <= 100) {
//     console.log(x);
//     x++;
//   }
// }

// console.log(century(x));

function even(evenValue) {
  let firstValue = 2;
  while (firstValue <= evenValue) {
    console.log(firstValue);
    firstValue += 2;
  }
}
console.log(even(44));

function evenex(evenExculsiveValue) {
  let secondValue = 2;
  while (secondValue < evenExculsiveValue) {
    console.log(secondValue);
    secondValue += 2;
  }
}
console.log(evenex(10));

function odd(oddValue) {
  let numberOne = 1;
  while (numberOne <= oddValue) {
    console.log(numberOne);
    numberOne += 2;
  }
}
console.log(odd(33));

function oddex(oddExculsiveValue) {
  let numberTwo = 1;
  while (numberTwo < oddExculsiveValue) {
    console.log(numberTwo);
    numberTwo += 2;
  }
}
console.log(`${oddex(17)} 11, exclusive`);

function printAllEvenNumbersUpto(maxNumber, inclusiveOrExclusive) {
  if (inclusiveOrExclusive === "i") {
    console.log(evenex(maxNumber));
  } else if (inclusiveOrExclusive === "e") {
    console.log(evenex(maxNumber));
  }
}

console.log(printAllEvenNumbersUpto(20, "i"));
