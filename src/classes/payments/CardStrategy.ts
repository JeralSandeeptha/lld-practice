import type { IPaymentStrategy } from "./IpaymentStrategy.js";

export class CardStrategy implements IPaymentStrategy {
    private cardNumber: string;
    private cardHolderName: string;
    private expiryDate: string;
    private cvv: string;

    constructor(cardNumber: string, cardHolderName: string, expiryDate: string, cvv: string) {
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }

    pay(amount: number): void {
        console.log(`Processing card payment of $${amount} for card number ${this.cardNumber}`);
    }
};
