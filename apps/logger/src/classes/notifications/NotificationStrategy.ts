import { EmailNotificationStrategy } from "./EmailNotificationStrategy";
import { ENotificationTypes } from "./ENotificationTypes";
import { INotificationStrategy } from "./INotification";
import { SMSNotificationStrategy } from "./SMSNotificationStrategy";

export class NotificationStrategy {
    private static strategyMap:
        Record<ENotificationTypes, INotificationStrategy> = {

        [ENotificationTypes.EMAIL]:
            new EmailNotificationStrategy(),

        [ENotificationTypes.SMS]:
            new SMSNotificationStrategy(),
    };

    public static sendNotifications(
        types: ENotificationTypes[],
        message: string
    ): void {

        for (const type of types) {

            const strategy =
                this.strategyMap[type];

            if (!strategy) {
                console.warn(
                    `No strategy found for ${type}`
                );
                continue;
            }

            strategy.send(message);
        }
    }
};
