import { CoffeeDecorator } from "./CoffeeDecorator.js";
import type { ICoffee } from "./ICoffee.js";

export class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: ICoffee) {
    super(coffee);
  }

  getName(): string {
    return `${this.coffee.getName()}, with additional milk`;
  }
  getPrice(): number {
    return this.coffee.getPrice() + 30;
  }
}
