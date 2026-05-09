import { ECoffeeAddons } from "../coffees/ECoffeeAddons.js";
import { IceDecorator } from "../coffees/IceDecorator.js";
import { MilkDecorator } from "../coffees/MilkDecorator.js";
import { SugarDecorator } from "../coffees/SugarDecorator.js";
import type { IOrder } from "../order/IOrder.js";
import { CookFactory } from "./CookFactory.js";
import type { IObserver } from "./IObserver.js";
import type { ISubject } from "./ISubject.js";

export class Kitchen implements ISubject {
  private observers: any[] = [];

  public subscribe(observer: any): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: any): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  public notify(data: any): void {
    this.observers.forEach((observer) => observer.update(data));
  }

  public async createCoffee(order: any): Promise<void> {
    console.log(
      `Creating coffee: ${order.coffeeType} with add-ons: ${JSON.stringify(order.add_ons)}`,
    );

    let coffee = await CookFactory.createProduct(order.coffeeType);

    console.log(coffee);

    if (order.add_ons.length > 0) {
      console.log(
        `Adding add-ons: ${JSON.stringify(order.add_ons)} to ${coffee.getName()}`,
      );
      for (const add_on of order.add_ons) {
        console.log(`Adding ${add_on} to ${coffee.getName()}`);

        const delay = (Math.floor(Math.random() * 5) + 1) * 1000;

        await new Promise((resolve) => setTimeout(resolve, delay));

        switch (add_on) {
          case ECoffeeAddons.MILK:
            coffee = new MilkDecorator(coffee);
            break;

          case ECoffeeAddons.ICE:
            coffee = new IceDecorator(coffee);
            break;

          case ECoffeeAddons.SUGAR:
            coffee = new SugarDecorator(coffee);
            break;

          default:
            throw new Error("Invalid add-on");
        }
      }
    }

    console.log(coffee);

    // notify the observers that the coffee is ready
    const latestOrder = {
        product: order.coffeeType,
        add_ons: order.add_ons,
        description: `User ordered a delicious ${order.coffeeType} with ${order.add_ons.join(", ")}. We offered a ${coffee.getName()} for the user and it cost $${coffee.getPrice()}.`,
        cost: coffee.getPrice(),
    } as IOrder;
    
    console.log(`Coffee created: ${latestOrder.product} with add-ons: ${JSON.stringify(latestOrder.add_ons)}`);
    this.notify(latestOrder);
  }

  public getObservers(): IObserver[] {
    return this.observers;
  }
}
