// ******RIGHTANGLE TRIANGLE*****

// let star = "*";
// let steric = "#";
// let starOutput = "";
// let stericOutput = "";
// let finalOutput = "";
// for (let i = 1; i <= 5; i++) {
//   starOutput = starOutput + star;
//   finalOutput = finalOutput + "\n" + starOutput;
// }
// console.log(finalOutput);

// ******REVERSE RIGHTANGLE TRIANGLE*****

let star = "*";
let steric = "#";
let starOutput = "";
let stericOutput = "";
let finalOutput = "";
for (let k = 5; k >= 1; k--) {
  for (let i = 1; i <= k; i++) {
    finalOutput = finalOutput + star;
  }
  finalOutput = finalOutput + "\n";
}
console.log(finalOutput);

// ******Even AND ODD LINES*****

// for (let j = 1; j <= 10; j++) {
//   for (let i = 1; i <= 6; i++) {
//     if (j % 2 == 1) {
//       finalOutput = finalOutput + star;
//     } else {
//       finalOutput = finalOutput + steric;
//     }
//   }
//   finalOutput = finalOutput + "\n";
// }
// console.log(finalOutput);
