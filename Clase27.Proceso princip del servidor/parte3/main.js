const yargs = require("yargs")(process.argv.slice(2));

const args = yargs.alias({
    u: "user",
    p: "password",
}).default({
    user: 'root',
    password: "password1",
}).argv;

console.log(args);