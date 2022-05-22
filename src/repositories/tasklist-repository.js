const { v4: uuidV4 } = require('uuid');

/**
 * @type { import("knex").Knex } knex
 */
const connection = require('../database/connection');

class UserRepository {
  constructor () {
    this._tasks = connection;
  }

  async create(taskEntity) {
    taskEntity.id = uuidV4();
    await this._tasks('tasklist').insert(taskEntity);
  }
}

module.exports = UserRepository;