const SignUp         = require('./_signup');
const UserRepository = require('../../repositories/user-repository');

const userRepository = new UserRepository();
const signupUseCase  = new SignUp(userRepository);

module.exports = {
  signupUseCase
}