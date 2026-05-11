import { AlertAppender } from '../appenders/AlertAppender';
import { ConsoleAppender } from '../appenders/ConsoleAppender';
import { FileAppender } from '../appenders/FileAppender';
import { IAppender } from '../appenders/IAppender';
import { SentryAppender } from '../appenders/SentryAppender';
import { ELogLevel } from '../loglevels/ELogLevel';
import { DevelopmentLogger } from './DevelopmentLogger';
import { EEnvType } from './EEnvType';
import { ILogger } from './ILogger';
import { ProductionLogger } from './ProductionLogger';

export class LoggerFactory {
  public static createLogger(envType: EEnvType): ILogger {
    switch (envType) {
      case EEnvType.DEVELOPMENT:
        return new DevelopmentLogger();
      case EEnvType.PRODUCTION:
        const appenders: IAppender[] = [
          new FileAppender({
            [ELogLevel.DEBUG]: 'logs/debug.log',
            [ELogLevel.INFO]: 'logs/app.log',
            [ELogLevel.WARN]: 'logs/app.log',
            [ELogLevel.ERROR]: 'logs/error.log',
            [ELogLevel.FATAL]: 'logs/error.log',
          }),
          new ConsoleAppender(),
          new SentryAppender(),
          new AlertAppender(),
        ];
        return new ProductionLogger(appenders);
      default:
        throw new Error('Invalid environment type');
    }
  }
}
