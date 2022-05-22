const { v4: uuidV4 } = require('uuid');

/**
 * @type { import("knex").Knex } knex
 */
const connection = require('../database/connection');

class UserRepository {
  constructor () {
    this._users = connection;
  }

  async create(userEntity) {
    userEntity.id = uuidV4();
    await this._users('users').insert(userEntity);
  }

  async getById(id) {
    const user = await this._users('users')
      .where('id', id)
      .first();

    return user;
  }

  async getByEmail(email) {
    const user = await this._users('users')
      .where('email', email)
      .first();

    return user;
  }
}

module.exports = UserRepository;