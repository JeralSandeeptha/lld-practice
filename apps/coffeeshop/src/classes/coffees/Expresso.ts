import { ECoffeeType } from "./ECoffeeType.js";
import type { ICoffee } from "./ICoffee.js";

export class Expresso implements ICoffee {
    private name: string = ECoffeeType.EXPRESSO;
    private price: number = 500;

    getName(): string {
        return this.name;
    }
    getPrice(): number {
        return this.price;
    }
    
};
