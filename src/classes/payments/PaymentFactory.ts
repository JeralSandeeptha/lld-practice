import { CardStrategy } from "./CardStrategy.js";
import { CashStrategy } from "./CashStrategy.js";

export class PaymentFactory {
    public static createPaymentStrategy(paymentType: string): any {
        switch (paymentType) {
            case "Card":
                return new CardStrategy();
            case "Cash":
                return new CashStrategy();
            default:
                throw new Error(`Unsupported payment type: ${paymentType}`);
        }
    }
};
