# Coffee Ordering System

---

## Description

Build a tiny console app for a coffee shop.

## Requirements

- Base drinks: Espresso, Tea
- Add-ons: Milk, Sugar, Whipped Cream
- Different payment methods: Cash, Card
- Notify kitchen when order is placed

## Decisions

- For addons can use `Decorator Pattern`. With this we can add different behaviours.
- For create diffrent types of Coffees `Factory Pattern`. With that we can generate different types of coffees without split into / create multiple objects.
- Need to maintain Kitchen / Coffee factory object for tracking purpose (for `Notify kitchen when order is placed` requirement). For that `Singleton Pattern`. It defines we can have only one factory / shop.
- For payments `Strategy Pattern`. This allows to chnage the algo when the runtime dynamically.
- For notify kitchen `Observer Pattern` can be used

## Class Diagram

```mermaid

classDiagram

%% ===== Interfaces =====

class ICoffee {
    <<interface>>
    +getPrice() number
    +getName() string
}

class IPaymentStratergy {
    <<interface>>
    +pay() void
}

class IObserver {
    <<interface>>
    +update(data: any) void
}

%% ===== Concrete Classes =====
class IceCoffee {
    -observers: ICoffee[]
    +getPrice() number
    +getName() string
}

class Espresso {
    +getPrice() number
    +getName() string
}

class CoffeeDecorator {
    <<interface>>
    -coffee: ICoffee
    +getPrice() number
    +getName() string
}

class MilkDecorator {
    -coffee: ICoffee
    +getPrice() number
    +getName() string
}

class SugarDecorator {
    -coffee: ICoffee
    +getPrice() number
    +getName() string
}

class IceDecorator {
    -coffee: ICoffee
    +getPrice() number
    +getName() string
}

class CoffeeFactorySingleton {
    - static instance: CoffeeFactorySingleton
    -constructor()
    + static getInstance(): CoffeeFactorySingleton
    +createCoffee(coffeeType: ECoffeeType) ICoffee
}

class ECoffeeType {

}

class CashStratergy {
    +pay() void
}

class CardStratergy {
    +pay() void
}

class PaymentStratergy {
    -stratergy IPaymentStratergy
    +pay() void
    +setStrategy(strategy: PaymentStrategy) void
}

class Kitchen {
    -observers: any[]
    +notify(data: any): void
    +subscribe(observer: any): void
    +unsubscribe(observer: any): void
}

%% ===== Relationships =====

ICoffee <|.. IceCoffee : is-a
ICoffee <|.. Espresso : is-a
ICoffee <|.. CoffeeDecorator : is-a
CoffeeDecorator <|.. MilkDecorator : is-a
CoffeeDecorator <|.. SugarDecorator : is-a
CoffeeDecorator <|.. IceDecorator : is-a
IPaymentStratergy <|.. CashStratergy : is-a
IPaymentStratergy <|.. CardStratergy : is-a
PaymentStratergy <|.. IPaymentStratergy : has-a

IObserver <|.. CoffeeFactorySingleton : is-a

CoffeeDecorator --> ICoffee : has-a

CoffeeFactorySingleton --> ECoffeeType : selects type
CoffeeFactorySingleton --> ICoffee : uses
CoffeeFactorySingleton --> Kitchen : has-a


%% ===== Client =====
class Client {
    +main() void
}

Client --> CoffeeFactorySingleton : uses
Client --> PaymentStratergy : uses

```
