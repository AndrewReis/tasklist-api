const { Router } = require('express');

const routes = Router();

routes.get('/health', (req, res) => {
  return res.json({
    message: 'Api Worked!'
  });
});

module.exports = routes;