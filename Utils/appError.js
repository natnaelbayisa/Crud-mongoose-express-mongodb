class AppError extends Error {
  constructor(message, statusCode) {
    // super is used to call the parent constructor
    super(message); //message is the only parameter that the built-in error accepts

    this.statusCode = statusCode;
    this.message = message;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error"; //operational
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
