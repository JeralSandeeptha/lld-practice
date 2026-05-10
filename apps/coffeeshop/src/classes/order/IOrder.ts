import type { EPaymentType } from "../payments/IPayments.js";

export interface IOrder {
    _id: string;
    product: string;
    add_ons: string[];
    description: string;
    cost: number;
    paymentType: EPaymentType;
};
