
// use-cases
const { signupUseCase, signInUseCase, createTaskUseCase } = require('../../use-cases/users');

/** @type {import("express").RequestHandler} */
module.exports.signUp = async (request, response) => {
  const {name, email, password} = request.body;
  
  await signupUseCase.execute(name, email, password);
  return response.status(201).send();
};

/** @type {import("express").RequestHandler} */
module.exports.signIn = async (request, response) => {
  const {email, password} = request.body;
  
  const user = await signInUseCase.execute(email, password);
  return response.status(200).json(user);
};

/** @type {import("express").RequestHandler} */
module.exports.createTask = async (request, response) => {
  const user      = request.user;
  const { title } = request.body;
  
  await createTaskUseCase.execute(user.id, title);
  return response.status(201).send();
};