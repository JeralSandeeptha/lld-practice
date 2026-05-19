import { INotification } from "./INotification";

export class EmailNotification implements INotification {
    sendNotification(): void {
        console.log("Sending email notification...");
    }
};
