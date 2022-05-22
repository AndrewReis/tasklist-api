/**
 * @type { import("knex").Knex } knex
 */
const connection = require('../database/connection');

class UserRepository {
  constructor () {
    this._users = connection;
  }

  async create(userEntity) {
    await this._users('users').insert(userEntity);
  }

  async getByEmail(email) {
    const user = await this._users('users')
      .where('email', email)
      .first();

    return user;
  }
}

module.exports = UserRepository;