import chalk from 'chalk';
import { ELogLevel } from '../classes/loglevels/ELogLevel';

export const getColor = (level: ELogLevel) => {
  switch (level) {
    case ELogLevel.INFO:
      return chalk.green;
    case ELogLevel.WARN:
      return chalk.yellow;
    case ELogLevel.ERROR:
      return chalk.red;
    case ELogLevel.FATAL:
      return chalk.bgRed.white;
    case ELogLevel.DEBUG:
      return chalk.blue;
    case ELogLevel.TRACE:
      return chalk.gray;
    default:
      return chalk.white;
  }
};
