// dependencies
const { compare } = require('bcryptjs');
const { sign }    = require('jsonwebtoken');

// configs
const { jwt } = require('../../config/auth');

// helpers
const AppError = require('../../helpers/app-error');

class SignUp {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async execute(email, password) {
    const user = await this.userRepository.getByEmail(email);

    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const { secret, expiresIn } = jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn
    });

    return {
      user: {
        id        : user.id,
        name      : user.name,
        email     : user.email,
        createdAt : user.created_at,
        updatedAt : user.updated_at
      },
      token
    }
  }
} 

module.exports = SignUp;