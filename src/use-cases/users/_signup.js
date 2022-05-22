// dependencies
const { hash } = require('bcryptjs');

const AppError = require('../../helpers/app-error');

class SignUp {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(name, email, password) {
    const checkUserExist = await this.userRepository.getByEmail(email);

    if (!checkUserExist) {
      const hashPassword = await hash(password, 8);

      const user = {
        name,
        email,
        password: hashPassword,
        created_at: new Date(),
        updated_at: new Date()
      }
      
      await this.userRepository.create(user);
      return user;
    }

    throw new AppError('Email already registered', 409);
  }
} 

module.exports = SignUp;