
function CustomException(message, code) {
  const error = new Error(message);
  error.code = code;
  return error;
}
console.log(CustomException("DEU ERROR", 500));