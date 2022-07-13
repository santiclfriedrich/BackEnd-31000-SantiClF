const knex = require('knex')
const path = require('path')

const config = {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'primerabase'
    },
    pool: { min: 0, max: 7 }
  };
  
  const configSQLite3 = {
    client: 'sqlite3',
    connection: {
        filename: './db/msg.db'
    },
    useNullAsDefault: true
  };

  const databaseConnection = knex(config)
  const dblite = knex(configSQLite3)

  module.exports = { databaseConnection, dblite }