import { ELogLevel } from "../loglevels/ELogLevel";

export interface IAppender {
    append(level: ELogLevel, message: string): void;
};
