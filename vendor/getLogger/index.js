/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import chalk from 'chalk';

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  log: 'blue',
  verbose: 'magenta',
};

const EnumeratedLogLevel = {
  verbose: 0,
  log: 1,
  info: 2,
  warn: 3,
  error: 4,
  silent: 5,
};

const noop = () => { };

function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function objectGet(obj, key, defaultValue = undefined) {
  const type = typeof (obj);

  if (!obj || type === 'number' || type === 'string') {
    return defaultValue;
  }

  // eslint-disable-next-line no-prototype-builtins
  if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
    return obj[key];
  }
  return defaultValue;
}

/**
 * Another generic logger based in many loggers
 * @author Tobias Ulrich <tobiasbulrich@gmail.com>
 * @param {*} options
 */
export default function getLogger(options) {
  const opts = {
    symbol: options.symbol || '',
    errorSymbol: options.errorSymbol || '',
    name: options.name || '',
    timestamp: objectGet(options, 'timestamp', false),
    level: options.level || 'log',
    displayLevel: objectGet(options, 'displayLevel', false),
    colorize: objectGet(options, 'colorize', true),
    bgPrefix: objectGet(options, 'bgPrefix', true),
  };

  // validate user level
  let userLevel;
  if (typeof opts.level === 'string' && EnumeratedLogLevel[opts.level] !== undefined) {
    userLevel = EnumeratedLogLevel[opts.level];
  }
  if (typeof userLevel !== 'number') {
    userLevel = EnumeratedLogLevel.log;
  } else if (userLevel <= 0) {
    userLevel = EnumeratedLogLevel.verbose;
  } else if (userLevel > EnumeratedLogLevel.silent) {
    userLevel = EnumeratedLogLevel.silent;
  }

  /**
   * @type {LogLevel[]}
   */
  const methods = [
    'error',
    'warn',
    'info',
    'log',
    'verbose',
  ];

  const logger = {
    options: opts,
    template: `${opts.displayLevel === true ? ' {{ level }}' : ''}${opts.timestamp === true ? ' [{{ time }}]' : ''}`,
    prefix: `${opts.symbol} ${opts.name}`,
    prefixError: `${opts.errorSymbol} ${opts.name}`,
    levels: userLevel,
  };

  function interpolate(level) {
    return logger.template.replace(/{{([^{}]*)}}/g, (substr, match) => {
      if (/level/.test(match)) {
        return level;
      }
      if (/time/.test(match)) {
        return new Date().toTimeString().split(' ')[0];
      }
      return substr;
    });
  }

  function compose(fn, color, prefix) {
    return (message, ...optionalParams) => {
      let prefixColorFn = chalk[color];
      if (logger.options.bgPrefix) {
        prefixColorFn = chalk[`bg${capitalize(color)}`].black;
      }
      const prefixMsg = prefixColorFn(`${prefix}${interpolate(logger.template)}:`);

      const msg = (logger.options.colorize) ? chalk[color](message) : message;
      if (optionalParams && optionalParams.length > 0) {
        const joinedParams = optionalParams.join(' ');
        fn(`${prefixMsg} ${msg}`, (logger.options.colorize) ? chalk[color](joinedParams) : joinedParams);
        return;
      }
      fn(`${prefixMsg} ${msg}`);
    };
  }


  methods.forEach((methodName) => {
    const methodLevel = EnumeratedLogLevel[methodName];
    let method;
    if (methodLevel < userLevel) {
      method = noop;
    } else if (console[methodName]) {
      let prefix;
      if (methodName === 'warn' || methodName === 'error') {
        prefix = logger.prefixError;
      } else {
        prefix = logger.prefix;
      }
      method = compose(console[methodName], colors[methodName], prefix);
    } else {
      method = noop;
    }
    logger[methodName] = method;
  });

  logger.trace = logger.verbose;
  logger.debug = logger.log;

  return logger;
}
