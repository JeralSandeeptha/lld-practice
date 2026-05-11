import { EEnvType } from "./classes/logger/EEnvType";
import { LoggerSingleton as Logger } from "./classes/logger/LoggerSingleton";

const logger = Logger.getInstance(EEnvType.PRODUCTION);

logger.error("This is an error message");
logger.warn("This is a warning message");
logger.info("This is an info message");
logger.debug("This is a debug message");
logger.fatal("This is a fatal message");
logger.trace("This is a trace message");
