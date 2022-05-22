// dependencies
const { verify } = require('jsonwebtoken');

// config
const authConfig = require('../config/auth');

// helpers
const AppError = require('../helpers/app-error');

/** @type {import("express").RequestHandler} */
module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);
    const { sub } = decoded;

    request.user = {
      id: sub
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT token.', 401);
  }
}