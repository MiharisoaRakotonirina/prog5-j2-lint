import Wallet from "../wallet.js";

const myWallet = new Wallet("red", 10);
const mySecondWallet = new Wallet("blue", 20);

myWallet.open();
myWallet.addMoney(50);
console.log(myWallet.getMoney());

mySecondWallet.open();
mySecondWallet.addMoney(30);
console.log(mySecondWallet.getMoney());

const totalMoney = myWallet.getMoney() + mySecondWallet.getMoney();
console.log("Total money:", totalMoney);

const ThirdWallet = new Wallet("green", 0);
const my_third_wallet = new Wallet("yellow", 45);

const monPortefeuille = new Wallet("violet", 100);
monPortefeuille.open();
monPortefeuille.addMoney(25);
console.log(monPortefeuille.getMoney());
