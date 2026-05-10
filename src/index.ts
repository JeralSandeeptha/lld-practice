import { open } from "fs";
import { ECoffeeAddons } from "./classes/coffees/ECoffeeAddons.js";
import { ECoffeeType } from "./classes/coffees/ECoffeeType.js";
import { CoffeeSingletonObserer as CoffeeShop } from "./classes/shop/CoffeeSingletonObserer.js";
import { EPaymentType } from "./classes/payments/IPayments.js";

// create shop
async function openShop() {
    const coffeeShop = CoffeeShop.getInstance();
    return coffeeShop;
}

// subscribe the kitchen then it can get updates from the kitchen
async function subscribeKitchen() {
    const coffeeShop = await openShop();
    coffeeShop.subscribeKitchen();
}

// add funds and check the balance
async function addFunds() {
    const coffeeShop = await openShop();
    coffeeShop.addFunds(100000);
    console.log(`Account Balance: $${coffeeShop.getAccountBalance()}`);
}

// withdraw funds for products and shop renovations
async function withdrawFunds() {
    const coffeeShop = await openShop();
    coffeeShop.withdrawFunds(50000);
    console.log(`Account Balance: $${coffeeShop.getAccountBalance()}`);
}

// place orders
async function placeOrders() {
    const coffeeShop = await openShop();

    await coffeeShop.placeOrder(
        ECoffeeType.ICE_COFFEE,
        [ECoffeeAddons.ICE, ECoffeeAddons.SUGAR],
        EPaymentType.CARD
    );

    await coffeeShop.placeOrder(
        ECoffeeType.EXPRESSO,
        [ECoffeeAddons.MILK],
        EPaymentType.CASH
    );
}

// check orders
async function checkOrders() {
    const coffeeShop = await openShop();
    console.log(coffeeShop.getOrders());
}

// sell coffees and check account balance
async function sellCoffees() {
    const coffeeShop = await openShop();

    const orders = [...coffeeShop.getOrders()];

    for (const order of orders) {
        coffeeShop.sellCoffee(order);
        console.log(
            `Account Balance increased to $${coffeeShop.getAccountBalance()}`
        );
    }

    console.log(
        `Final Account Balance: $${coffeeShop.getAccountBalance()}`
    );
}

(async function main() {
    await subscribeKitchen();
    await addFunds();
    await withdrawFunds();
    await placeOrders();
    await checkOrders();
    await sellCoffees();
})()