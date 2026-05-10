import type { ECoffeeAddons } from "../coffees/ECoffeeAddons.js";
import type { ECoffeeType } from "../coffees/ECoffeeType.js";
import type { IOrder } from "../order/IOrder.js";
import { EPaymentType } from "../payments/IPayments.js";
import { PaymentFactory } from "../payments/PaymentFactory.js";
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

    public placeOrder(coffeeType: ECoffeeType, add_ons: ECoffeeAddons[], paymentType: EPaymentType): Promise<void> {
        console.log(`New order: ${coffeeType} with add-ons: ${JSON.stringify(add_ons)}, will be paid with ${paymentType}`);
        return this.kitchen.createCoffee({ coffeeType, add_ons, paymentType });
    }

    public sellCoffee(order: IOrder): void {
        console.log(`Finalizing order: ${order._id} via ${order.paymentType}`);
        
        const paymentStrategy = PaymentFactory.createPaymentStrategy(order.paymentType);
        paymentStrategy.payAmount(order.cost);

        this.addFunds(order.cost);
        this.orders = this.orders.filter((o) => o._id !== order._id);
        console.log(`Sold coffee: ${order.product} for $${order.cost}`);
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
