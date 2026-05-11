import path from "path";
import { ELogLevel } from "../loglevels/ELogLevel";
import { IAppender } from "./IAppender";
import fs from 'fs';

export class FileAppender implements IAppender {
    private fileMap: Partial<Record<ELogLevel, string>>;

    constructor(fileMap: Partial<Record<ELogLevel, string>>) {
        this.fileMap = fileMap;
        this.ensureDirectories();
    }

    private ensureDirectories(): void {
        const files = Object.values(this.fileMap);

        for (const file of files) {
            if (!file) continue;
            const dir = path.dirname(file);
            fs.mkdirSync(dir, { recursive: true });
        }
    }

    append(level: ELogLevel, message: string): void {

        const file = this.fileMap[level];
        if (!file) return;

        const line =
            `[${new Date().toISOString()}] ` +
            `[${level}] ${message}\n`;

        fs.appendFileSync(
            path.resolve(file),
            line
        );
    }
};
