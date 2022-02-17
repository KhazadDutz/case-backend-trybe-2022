// código encontrado nesse site:
// https://rollbar.com/guides/javascript/how-to-throw-exceptions-in-javascript/#
function customException(code, message) {
  const error = new Error(message);
  error.code = code;
  return error;
}

customException.prototype = Object.create(Error.prototype);

module.exports = {
  customException,
};
