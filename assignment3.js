let bill = 40;
let usualTip = (15 / 100) * 40;
let tip = (20 / 100) * 40;
let usualtotalValue = bill + usualTip;
let totalValue = bill + tip;

if (bill > 50 || bill < 300) {
  console.log(
    `The bill was ${bill}, the tip was ${usualTip}, and the total value ${usualtotalValue}`
  );
} else if (bill <= 50 || bill >= 300) {
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
  );
}
