const _getDateTimeString = () => {
  return new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');
}

const _log = (logFn, message) => {
  const dateStr = Date.now();
  logFn(`[${_getDateTimeString()}] -- ${message}`);
};

export const logInfo = (message) => {
  _log(console.log, message);
};

export const logWarning = (message) => {
  _log(console.warn, message);
};

export const logError = (message) => {
  _log(console.error, message);
};

