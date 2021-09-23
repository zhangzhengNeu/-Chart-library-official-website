const formatError = (name, status) => (error = new Error(), origin = '') => {
  if (!(error instanceof Error)) {
    error = new Error(error);
  }
  error.name = name;
  error.status = status || error.status || 500;
  error.origin = origin;
  return error;
};

const CASError = formatError('CAS_ERROR', 401);
const responseTimeout = formatError('RESPONSE_TIMEOUT', 408);
const responseError = formatError('RESPONSE_ERROR');
const responseInvalid = formatError('RESPONSE_INVALID', 500);
const uncaught = formatError('UNCAUGHT_ERROR', 500);

module.exports = {
  formatError,
  CASError,
  responseTimeout,
  responseError,
  responseInvalid,
  uncaught
};
