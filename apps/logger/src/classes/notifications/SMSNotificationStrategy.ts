import { INotificationStrategy } from "./INotification";

export class SMSNotificationStrategy implements INotificationStrategy {
    send(data: any): void {
        console.log(`SMSNotificationStrategy - Sending SMS with data: ${JSON.stringify(data)}`);
    }
};
