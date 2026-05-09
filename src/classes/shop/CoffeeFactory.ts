import { ECoffeeType } from "../coffees/ECoffeeType.js";
import { Expresso } from "../coffees/Expresso.js";
import { IceCoffee } from "../coffees/IceCoffee.js";
import type { ICoffee } from "../coffees/ICoffee.js";

export class CoffeeFactory {

    public static async createCoffee(product: string): Promise<ICoffee> {
        const delay = (Math.floor(Math.random() * 10) + 1) * 1000;
        
        switch(product) {
            case ECoffeeType.EXPRESSO:
                return await new Promise<ICoffee>((resolve) =>
                    setTimeout(() => resolve(new Expresso()), delay)
                );
            case ECoffeeType.ICE_COFFEE:
                return await new Promise<ICoffee>((resolve) =>
                    setTimeout(() => resolve(new IceCoffee()), delay)
                );
            default:
                throw new Error("Invalid product type");
        }
    }
};
