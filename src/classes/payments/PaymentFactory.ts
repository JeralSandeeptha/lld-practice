import { CardStrategy } from "./CardStrategy.js";
import { CashStrategy } from "./CashStrategy.js";
import { PaymentStrategy } from "./PaymentStrategy.js";

export class PaymentFactory {
    public static createPaymentStrategy(paymentType: string): any {
        switch (paymentType) {
            case "Card":
                return new PaymentStrategy(new CardStrategy());
            case "Cash":
                return new PaymentStrategy(new CashStrategy());
            default:
                throw new Error(`Unsupported payment type: ${paymentType}`);
        }
    }
};
