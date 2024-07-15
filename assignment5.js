do {
  let userVal = prompt("Enter first token");
  let firstLetter = userVal.charAt(0);
  firstLetter === firstLetter.toUpperCase;
  let chrcLenth = userVal.length;
  let inculdeZ = userVal.includes("Z");
  let inculdez = userVal.includes("z");

  if ((chrcLenth <= 8 && firstLetter === "A" && inculdeZ) || inculdez) {
    console.log("the token is valid");
  } else {
    console.log("the token is invalid");
  }
} while (prompt("Do u want to continue") === "yes");

console.log("Goodbye!!");
