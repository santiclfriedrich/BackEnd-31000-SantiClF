import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import sessionFilestore from 'session-file-store';

const app = express();

const FileStore = sessionFilestore(session)

app.use(cookieParser())
app.use(
    session({
        store: new FileStore({
      path: './sesiones',
      ttl: 60,
      retries: 0,
}),
    secret: 'coderhouse',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    },
  })
);

app.get("/", (req, res) => {
    req.session.name = req.query.name;

    res.send(`Bienvenido ${req.query.name} `)
});

app.get('/get', (req, res) => {
    res.json(req.session)
})

app.listen(3000, () => {
    console.log("oki");
})