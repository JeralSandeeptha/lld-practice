import { EEnvType } from "./EEnvType";
import { ILogger } from "./ILogger";
import { LoggerFactory } from "./LoggerFactory";

export class LoggerSingleton {
    private static instance: ILogger;

    private constructor() {}

    // Singleton instance retrieval method
    public static getInstance(envType: EEnvType): ILogger {

        if (!LoggerSingleton.instance) {

            LoggerSingleton.instance =
                LoggerFactory.createLogger(envType);

            console.log(
                `Logger initialized for ${envType} on ${LoggerSingleton.instance.getLoggerInfo().initializedAt.toISOString()}`
            );
        }

        return LoggerSingleton.instance;
    }
};
