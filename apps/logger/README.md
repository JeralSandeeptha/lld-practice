# Logger System

---

## Description

Build a large sacle logger application

## Requirements

- Needs to verify that only one logger instance not multiples
- Supports multiple formats [`text`, `json`, `yaml`]
- Logger should have methods for log messages as user preferences
- Supports multiple LOG LEVELS [`error`, `warn`, `info`]
- Supports multiple outputs / appenders [`console`, `file`]
- Log message should include `LEVEL`, `TIME`, `MESSAGE`
- Logger should support both developement and production scenarios

- All the things should be extensible
- Logger should work correctly under the multi thread environments

- These are the current output types can be

```bash
TRACE -> console only (development)
DEBUG -> console + debug.log
INFO  -> console + app.log
WARN  -> console + app.log
ERROR -> console + error.log + Sentry/Datadog
FATAL -> console + error.log + Alerts/Crash Reporting
```

## Decisions

- Needs to verify that only one logger instance. For that `Singleton Pattern`
- For dynamic output formats `Strategy Pattern`
- For dyanmic appenders / output types `Strategy Pattern`
<!-- - For handle requests according to each level can use `Chain Of Responsibility Pattern` -->

## Class Diagram

```mermaid

classDiagram

%% ===== Interfaces =====

class ELogLevel {
    <<enum>>
}

class EEnvType {
    <<enum>>
}

class IAppender {
    <<interface>>
    -formatter: IFormatter
    append(logMessage: LogMessage): void
}

class IFormatter {
    <<interface>>
    format(logMessage: LogMessage): void
}

class ILogger {
    <<interface>>
    getLoggerInfo(): LoggerInfo;
    log(level: ELogLevel, message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    debug(message: string): void;
    fatal(message: string): void;
    trace(message: string): void;
}

%% ===== Concrete Classes =====

class LoggerSingleton {
    -static instance: LoggerSingleton
    -constructor()
    static getInstance(): LoggerSingleton
}

class LogMessage {}

class FileAppender {
    -formatter: IFormatter
    append(logMessage: LogMessage): void
}

class ConsoleAppender {
    -formatter: IFormatter
    append(logMessage: LogMessage): void
}

class JSONFormatter {
    format(logMessage: LogMessage): void
}

class TextFormatter {
    format(logMessage: LogMessage): void
}

class LoggerFactory {
    static createLogger(envType: EEnvType): ILogger
}

class ProductionLogger {}

class DevelopmentLogger {}

%% ===== Relationships =====

LoggerSingleton --> LoggerSingleton : uses own
LogMessage --> ELogLevel : uses
LoggerSingleton --> LoggerFactory : uses

LoggerFactory --> ILogger: uses

IAppender <|.. ConsoleAppender : is-a
IAppender <|.. FileAppender : is-a
IAppender --> IFormatter : has-a

IFormatter <|.. JSONFormatter : is-a
IFormatter <|.. TextFormatter : is-a

ILogger <|.. ProductionLogger: is-a
ILogger <|.. DevelopmentLogger: is-a
ILogger --> IAppender: uses


%% ===== Client =====

class Client {}

Client --> LoggerSingleton : uses
Client --> LogMessage : uses
Client --> EEnvType : uses

```
