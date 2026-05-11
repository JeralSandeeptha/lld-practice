import { ELogLevel } from "../loglevels/ELogLevel";

export class LogMessage {
    private message: string;
    private level: ELogLevel;
    private timestamp: Date;

    constructor(message: string, level: ELogLevel) {
        this.message = message;
        this.level = level;
        this.timestamp = new Date();
    }

    public getMessage(): string {
        return this.message;
    }

    public getTimestamp(): Date {
        return this.timestamp;
    }

    public getLevel(): ELogLevel {
        return this.level;
    }
};
