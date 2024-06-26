let bill = 400;
let usualTip = (15 / 100) * bill;
let tip = (20 / 100) * bill;
let usualtotalValue = bill + usualTip;
let totalValue = bill + tip;

if (bill > 50 && bill < 300) {
  console.log(
    `Hi The bill was ${bill}, the tip was ${usualTip}, and the total value ${usualtotalValue}`
  );
} else {
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
  );
}
