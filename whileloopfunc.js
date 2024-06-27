//  let x = 2;

// function century() {
//   while (x >= 1 && x <= 100) {
//     console.log(x);
//     x++;
//   }
// }

// console.log(century(x));

let x = 2;
function even(x) {
  while (x <= 10) {
    console.log(x);
    x += 2;
  }
}
console.log(even(x));

let a = 1;
function odd(a) {
  while (a <= 11) {
    console.log(a);
    a += 2;
  }
}
console.log(odd(a));

let m = 2;
function evenexculsive(m) {
  while (m < 10) {
    console.log(m);
    m += 2;
  }
}
console.log(evenexculsive(m));

let c = 1;
function oddexculsive(c) {
  while (c < 11) {
    console.log(c);
    c += 2;
  }
}
console.log(`${oddexculsive(c)} 11, exclusive`);
