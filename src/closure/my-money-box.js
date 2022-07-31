// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;

//   console.log(`MoneyBox: ${saveCoins}`);
// }

// moneyBox(20);

function moneyBox() {
  let saveCoins = 0;

  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox ${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();
console.log(myMoneyBox(4));
console.log(myMoneyBox(2));
console.log(myMoneyBox(5));

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(10);
moneyBoxAna(10);
