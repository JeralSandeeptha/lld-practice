import { ELogLevel } from "../loglevels/ELogLevel";
import { IAppender } from "./IAppender";

export class SentryAppender implements IAppender {
    append(level: ELogLevel, message: string): void {
        console.log(`SentryAppender - Level: ${level}, Message: ${message}`);
    }
};
