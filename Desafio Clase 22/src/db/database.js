const knex = require('knex')

const config = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "primerabase",
  },
  pool: { min: 0, max: 7 },
}
const configSQLite3 = {
  client: "sqlite3",
  connection: { filename: "./src/db/chat/chats.sqlite" },
  useNullAsDefault: true
}

const mysqlConnection = knex(config)
const sqliteConnection = knex(configSQLite3)
const mongoConnection = `mongodb+srv://santi:santi123@cluster0.judbcat.mongodb.net/mibase?retryWrites=true&w=majority`

module.exports = {mysqlConnection, sqliteConnection, mongoConnection}