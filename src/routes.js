const { Router } = require('express');

const { signupUseCase } = require('./use-cases/users');

const routes = Router();

routes.post('/signup', async (request, response) => {
  const {name, email, password} = request.body;

  await signupUseCase.execute(name, email, password);
  return response.status(201).send();
});

routes.get('/health', (req, res) => {
  return res.json({
    message: 'Api Worked!'
  });
});

module.exports = routes;