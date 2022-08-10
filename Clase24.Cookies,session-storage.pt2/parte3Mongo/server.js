import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }

app.use(cookieParser())
app.use(session({
    store: MongoStore.create({ mongoUrl: "mongodb+srv://santi:santi123@cluster0.judbcat.mongodb.net/?retryWrites=true&w=majority", mongoOptions }),
    secret: 'coderhouse',
    resave: false,
    cookie: {
        maxAge: 5000,
    },
})
);

app.get('/', (req, res) => {
    req.session.user = req.query.name;

    res.send("hola");
})

app.listen(3000, () => {
    console.log('Oka')
})