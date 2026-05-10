import type { IPaymentStrategy } from "./IPaymentStrategy.js";

export class CardStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Processing card payment of $${amount}...`);
    }
};
