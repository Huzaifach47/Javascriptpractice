let star = "*";
let starOutput = "";
let starsCounter = 1;
let finalOutput = "";
let space = " ";
let n = 5;
for (k = 1; k <= n; k++) {
  for (let j = 1; j <= n - k; j++) {
    finalOutput = finalOutput + space;
  }

  for (let i = 1; i <= starsCounter; i++) {
    finalOutput += star;
  }
  finalOutput += "\n";
  starsCounter += 2;
}

console.log(finalOutput);
