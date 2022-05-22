const { v4: uuidV4 } = require('uuid');

class SignUp {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(name, email, password) {
    const checkUserExist = await this.userRepository.getByEmail(email);

    if (!checkUserExist) {
      const user = {
        id: uuidV4(),
        name,
        email,
        password,
        created_at: new Date(),
        updated_at: new Date()
      }
      
      await this.userRepository.create(user);
      return user;
    }

    throw new Error('Email already registered');
  }
} 

module.exports = SignUp;