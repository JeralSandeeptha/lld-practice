import { getColor } from "../../utils/getColor";
import { ELogLevel } from "../loglevels/ELogLevel";
import { IAppender } from "./IAppender";

export class ConsoleAppender implements IAppender {
    append(level: ELogLevel, message: string): void {
        const output = `[${new Date().toISOString()}] |` +
            `[${level.toUpperCase()}] ` +
            `${message}`;
        console.log(getColor(level)(output));
    }
};
