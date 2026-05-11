import { ELogLevel } from "../loglevels/ELogLevel";
import { LoggerInfo } from "./LoggerInfo";

export interface ILogger {
    getLoggerInfo(): LoggerInfo;
    log(level: ELogLevel, message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    debug(message: string): void;
    fatal(message: string): void;
    trace(message: string): void;
};
