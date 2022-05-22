require('dotenv').config();

module.exports = {
  development: {
    client     : 'pg',
    connection : {
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    database : process.env.DB_DATABASE,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD
    },
    pool: {
      min                  : 0,
      max                  : 5,
      destroyTimeoutMillis : 30000,
      idleTimeoutMillis    : 30000
    },
    migrations: {
      tableName : 'knex_migrations',
      directory : `${__dirname}/src/database/migrations`
    }
  }
};
