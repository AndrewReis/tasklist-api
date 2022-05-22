// dependencies
require('dotenv').config();
require('express-async-errors');
const express = require('express');

const AppError = require('./helpers/app-error');
const routes   = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.use((err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});

app.listen(process.env.PORT || 3333, () => console.log(`Server running at ${process.env.PORT}`));