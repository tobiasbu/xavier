type LogFunction = (message: string, ...optionalParams: any[]) => void;

/**
 * Logger level
 *
 * - false or 'silent' - disable
 * - 'error' - errors only
 * - 'warn' - warnings and errors
 * - 'info' - errors, warnings and info messages
 * - 'log' and 'debug' - errors, warnings, info messages, log messages
 * - 'verbose' and 'trace' - everything
 */
type LogLevel =
'silent' |
'error' |
'warn' |
'info' |
'log' |
'verbose' |
'trace';

interface LoggerOptions {
  symbol?: string;
  errorSymbol?: string;
  /**
   * Logger name
   */
  name?: string;
  /**
   * Show time stamp?
   */
  timestamp?: boolean;
  /**
   * Logger level
   */
  level?: LogLevel | false;
  /**
   * Should display log level?
   */
  displayLevel?: boolean;
  /**
   * Colorize the console message too?
   */
  colorize?: boolean;
  /**
   * Should the prefixed text show with background color?
   */
  bgPrefix?: boolean;
}

type Logger = {
  [indexer in LogLevel]: LogFunction;
} & {
  readonly options: LoggerOptions;
  /**
   * Available log levels.
   */
  readonly levels: LogLevel;
}

/**
 * Another generic logger based in many loggers of the internet
 * @author Tobias Ulrich <tobiasbulrich@gmail.com>
 * @param {*} options 
 */
declare function getLogger(options: LoggerOptions): Logger;

export = getLogger;