import { ECoffeeType } from "./ECoffeeType.js";
import type { ICoffee } from "./ICoffee.js";

export class IceCoffee implements ICoffee {
    private name: string = ECoffeeType.ICE_COFFEE;
    private price: number = 300;

    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    
};
