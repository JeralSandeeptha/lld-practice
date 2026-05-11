import { IAppender } from '../appenders/IAppender';
import { ELogLevel } from '../loglevels/ELogLevel';
import { EEnvType } from './EEnvType';
import { ILogger } from './ILogger';
import { LoggerInfo } from './LoggerInfo';

export class ProductionLogger implements ILogger {
  private initializedAt: Date;
  private appenders: IAppender[];

  constructor(appenders: IAppender[]) {
    this.initializedAt = new Date();
    this.appenders = appenders;
  }
  
  getLoggerInfo(): LoggerInfo {
    return {
      initializedAt: this.initializedAt,
      envType: EEnvType.PRODUCTION,
    };
  }

  log(level: ELogLevel, message: string): void {
    this.appenders.forEach((appender) => {
      appender.append(level, message)
    });
  }

  public info(message: string): void {
    this.log(ELogLevel.INFO, message);
  }

  public warn(message: string): void {
    this.log(ELogLevel.WARN, message);
  }

  public error(message: string): void {
    this.log(ELogLevel.ERROR, message);
  }

  public debug(message: string): void {
    this.log(ELogLevel.DEBUG, message);
  }

  public fatal(message: string): void {
    this.log(ELogLevel.FATAL, message);
  }

  public trace(message: string): void {
    this.log(ELogLevel.TRACE, message);
  }
}
