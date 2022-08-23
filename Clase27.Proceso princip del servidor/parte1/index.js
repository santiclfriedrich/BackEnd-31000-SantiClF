const parseArgs = require('minimist');

const options = {
    alias: {
        u: 'user',
        p: 'password'
    },
    default: {
        user: 'root',
        password: 'password1',
    }
};

const args = parseArgs(process.argv.slice(2), options);

console.log(args);