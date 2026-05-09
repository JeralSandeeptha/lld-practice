import type { ECoffeeAddons } from "../coffees/ECoffeeAddons.js";
import type { ECoffeeType } from "../coffees/ECoffeeType.js";
import type { ICoffee } from "../coffees/ICoffee.js";
import type { IOrder } from "../order/IOrder.js";
import type { IObserver } from "./IObserver.js";
import { Kitchen } from "./Kitchen.js";

export class CoffeeSingletonObserer implements IObserver {
    private static instance: CoffeeSingletonObserer;
    private kitchen: Kitchen;
    private orders: IOrder[] = [];
    private accountBalance: number;

    private constructor() {
        this.kitchen = new Kitchen();
        this.accountBalance = 0;
    }

    // Observer pattern method
    public update(data: any): void {
        this.orders.push(data);
        console.log(this.getOrders());
    }

    public getOrders(): IOrder[] {
        return this.orders;
    }

    public static getInstance(): CoffeeSingletonObserer {
        if(!CoffeeSingletonObserer.instance) {
            CoffeeSingletonObserer.instance = new CoffeeSingletonObserer();
            return CoffeeSingletonObserer.instance;
        }
        return CoffeeSingletonObserer.instance;        
    }

    public placeOrder(coffeeType: ECoffeeType, add_ons: ECoffeeAddons[]): void {
        console.log(`New order: ${coffeeType} with add-ons: ${JSON.stringify(add_ons)}`);
        this.kitchen.createCoffee({ coffeeType, add_ons });
    }

    public sellCoffee(coffee: ICoffee): void {
        console.log(`Sold coffee: ${coffee.getName()} for $${coffee.getPrice()}`);
    }

    public getAccountBalance(): number {
        return this.accountBalance;
    }

    public addFunds(amount: number): void {
        this.setAccountBalance(amount);
    }

    public withdrawFunds(amount: number): number {
        this.setAccountBalance(-amount);
        return this.accountBalance;
    }

    private setAccountBalance(amount: number): void {
        this.accountBalance += amount;
    }

    public subscribeKitchen(): void {
        this.kitchen.subscribe(this);
    }

    public getKitchenObservers(): IObserver[] {
        return this.kitchen.getObservers();
    }
};
