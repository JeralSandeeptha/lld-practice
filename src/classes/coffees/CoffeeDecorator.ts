import type { ICoffee } from "./ICoffee.js";

export abstract class CoffeeDecorator implements ICoffee {
  protected coffee: ICoffee;

  constructor(coffee: ICoffee) {
    this.coffee = coffee;
  }

  abstract getName(): string;
  abstract getPrice(): number;
}
