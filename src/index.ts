import { ECoffeeAddons } from "./classes/coffees/ECoffeeAddons.js";
import { ECoffeeType } from "./classes/coffees/ECoffeeType.js";
import { CoffeeSingletonObserer as CoffeeShop } from "./classes/shop/CoffeeSingletonObserer.js";

// create shop
const coffeeShop = CoffeeShop.getInstance();

// add funds and check the balance
coffeeShop.addFunds(100000);
console.log(`Account Balance: $${coffeeShop.getAccountBalance()}`);

// withdraw funds for products and shop renovations
coffeeShop.withdrawFunds(50000);
console.log(`Account Balance: $${coffeeShop.getAccountBalance()}`);

// subscribe the kitchen then it can get updates from the kitchen
coffeeShop.subscribeKitchen();

coffeeShop.placeOrder(ECoffeeType.EXPRESSO, [ECoffeeAddons.MILK, ECoffeeAddons.SUGAR, ECoffeeAddons.ICE]);
coffeeShop.placeOrder(ECoffeeType.ICE_COFFEE, [ECoffeeAddons.SUGAR]);

console.log(coffeeShop);