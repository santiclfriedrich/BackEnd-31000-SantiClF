require('dotenv').config()

const args = require("yargs/yargs")(process.argv.slice(2)).alias({
    u: 'user',
    p: 'password'
}).default({
    port: 8080
}).argv

module.exports = {
    port: args.port,
    sessionsecret: process.env.SESSIONSECRET || 'coderhouse',
    mongoconnect: process.env.MONGOCONNECT || `mongodb+srv://santi:santi123@cluster0.judbcat.mongodb.net/coderhouse?retryWrites=true&w=majority`,
}