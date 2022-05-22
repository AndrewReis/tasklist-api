// dependencies
const { Router } = require('express');

// middleware
const verifyAuthenticate = require('./middlewares/verify-authenticate');

// controllers
const userPersistController = require('./controllers/users/persist.controller');

const routes = Router();

routes.post('/signup', userPersistController.signUp);
routes.post('/signin', userPersistController.signIn);
routes.post('/users/tasks',verifyAuthenticate, userPersistController.createTask);

routes.get('/health', (req, res) => {
  return res.json({
    message: 'Api Worked!'
  });
});

module.exports = routes;