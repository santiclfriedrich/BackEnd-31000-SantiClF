import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { createClient } from 'redis';
import connectRedis from 'connect-redis';

const app = express();
const client = createClient();
const RedisStore = connectRedis(session);

app.use(cookieParser())
app.use(session({
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client,
        ttl: 60
    }),
    secret: 'coderhouse',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000,
    }
})
);

app.get('/', (req, res) => {
    req.session.user = req.query.name

    res.send(`Bienvenido ${req.query.name}`);
});

app.get('get', (req, res) => {
    res.json(req.session);
});

app.listen(3000, () => {
    console.log("Oks")
})