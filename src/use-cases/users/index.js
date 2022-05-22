const SignIn     = require('./_signin');
const SignUp     = require('./_signup');
const CreateTask = require('./_create-task');

// repository
const UserRepository     = require('../../repositories/user-repository');
const TaskListRepository = require('../../repositories/tasklist-repository');

const userRepository     = new UserRepository();
const taskListRepository = new TaskListRepository();

const signupUseCase     = new SignUp(userRepository);
const signInUseCase     = new SignIn(userRepository);
const createTaskUseCase = new CreateTask(userRepository, taskListRepository);

module.exports = {
  signupUseCase,
  signInUseCase,
  createTaskUseCase
}