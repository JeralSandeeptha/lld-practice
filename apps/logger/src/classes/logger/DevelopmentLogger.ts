import { ConsoleAppender } from '../appenders/ConsoleAppender';
import { ELogLevel } from '../loglevels/ELogLevel';
import { EEnvType } from './EEnvType';
import { ILogger } from './ILogger';
import { LoggerInfo } from './LoggerInfo';

export class DevelopmentLogger implements ILogger {
  private initializedAt: Date;

  constructor() {
    this.initializedAt = new Date();
  }

  getLoggerInfo(): LoggerInfo {
    return {
      initializedAt: this.initializedAt,
      envType: EEnvType.DEVELOPMENT,
    };
  }

  log(level: ELogLevel, message: string): void {
    const appender = new ConsoleAppender();
    appender.append(level, message);
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
