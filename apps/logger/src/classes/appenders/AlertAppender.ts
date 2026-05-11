import { ELogLevel } from '../loglevels/ELogLevel';
import { ENotificationTypes } from '../notifications/ENotificationTypes';
import { NotificationStrategy } from '../notifications/NotificationStrategy';
import { IAppender } from './IAppender';

export class AlertAppender implements IAppender {
  append(level: ELogLevel, message: string): void {

        switch (level) {

            case ELogLevel.ERROR:

                NotificationStrategy.sendNotifications(
                    [
                        ENotificationTypes.EMAIL,
                        ENotificationTypes.SMS
                    ],
                    `[ERROR] ${message}`
                );

                break;

            case ELogLevel.FATAL:

                NotificationStrategy.sendNotifications(
                    [
                        ENotificationTypes.EMAIL,
                        ENotificationTypes.SMS
                    ],
                    `[FATAL] ${message}`
                );

                break;
        }
    }
}
