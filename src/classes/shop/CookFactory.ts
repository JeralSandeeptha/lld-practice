import type { ICoffee } from "../coffees/ICoffee.js";
import { CoffeeFactory } from "./CoffeeFactory.js";
import { DecoratorFactory } from "./DecoratorFactory.js";

export class CookAbstractFactory {

    public async createCoffee(coffeeType: string): Promise<ICoffee> {
        return await CoffeeFactory.createCoffee(coffeeType);
    }

    public async createDecorator(
        coffeeType: ICoffee,
        decorator: string
    ): Promise<ICoffee> {
        return await DecoratorFactory.createDecorator(
            coffeeType,
            decorator
        );
    }
};
