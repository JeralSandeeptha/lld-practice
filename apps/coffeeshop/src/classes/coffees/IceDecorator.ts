import { CoffeeDecorator } from "./CoffeeDecorator.js";
import { ECoffeeType } from "./ECoffeeType.js";
import type { ICoffee } from "./ICoffee.js";

export class IceDecorator extends CoffeeDecorator {
  constructor(coffee: ICoffee) {
    super(coffee);
  }

  getName(): string {
    if(`${this.coffee.getName()}` === ECoffeeType.ICE_COFFEE) return `${this.coffee.getName()}, with more ice cubes`;
    return `${this.coffee.getName()}, with ice cubes`;
  }
  getPrice(): number {
    return this.coffee.getPrice() + 30;
  }
}
