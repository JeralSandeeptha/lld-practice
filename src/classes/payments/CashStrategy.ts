import type { IPaymentStrategy } from "./IPaymentStrategy.js";

export class CashStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Processing cash payment of $${amount}...`);
    }
};
