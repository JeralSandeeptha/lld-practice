import type { IPaymentStrategy } from "./IpaymentStrategy.js";

export class PaymentStrategy {
    private strategy: IPaymentStrategy;

    constructor(strategy: IPaymentStrategy) {
        this.strategy = strategy;
    }
    
    payAmount(amount: number): void {
        this.strategy.pay(amount);
    }

    setStrategy(strategy: IPaymentStrategy): void {
        this.strategy = strategy;
    }
};
