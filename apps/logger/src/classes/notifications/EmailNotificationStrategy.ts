import { INotificationStrategy } from "./INotification";

export class EmailNotificationStrategy implements INotificationStrategy {
    send(data: any): void {
        console.log(`EmailNotificationStrategy - Sending Email with data: ${JSON.stringify(data)}`);
    }
};
