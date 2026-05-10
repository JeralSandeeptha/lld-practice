import { ECoffeeAddons } from "../coffees/ECoffeeAddons.js";
import { IceDecorator } from "../coffees/IceDecorator.js";
import type { ICoffee } from "../coffees/ICoffee.js";
import { MilkDecorator } from "../coffees/MilkDecorator.js";
import { SugarDecorator } from "../coffees/SugarDecorator.js";

export class DecoratorFactory {

    public static async createDecorator(coffee: ICoffee, decorator: any): Promise<ICoffee> {
        const delay = (Math.floor(Math.random() * 10) + 1) * 1000;
        
        switch(decorator) {
            case ECoffeeAddons.ICE:
                return await new Promise<ICoffee>((resolve) =>
                    setTimeout(() => resolve(new IceDecorator(coffee)), delay)
                );
            case ECoffeeAddons.MILK:
                return await new Promise<ICoffee>((resolve) =>
                    setTimeout(() => resolve(new MilkDecorator(coffee)), delay)
                );
            case ECoffeeAddons.SUGAR:
                return await new Promise<ICoffee>((resolve) =>
                    setTimeout(() => resolve(new SugarDecorator(coffee)), delay)
                );
            default:
                throw new Error("Invalid product type");
        }
    }
};
