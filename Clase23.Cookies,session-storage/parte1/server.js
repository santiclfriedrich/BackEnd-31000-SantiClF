import express, { json } from "express";
import cookieParser from "cookie-parser";

const app = express()

app.use(cookieParser("santi"));
app.use(json());

app.get('/set', (req, res) => {
    const { nombre } = req.query

    res.cookie('name', nombre, { signed: true }).send("Cookie set")
});

app.get('/setEX', (req, res) => {
    res.cookie('timeCookie', '30secs', { maxAge: 30000 })
    .send('Setted cookie with time');
});

app.get('/get', (req, res) => {
    console.log('Aca estan las cookies normales:', req.cookies);
    console.log('Aca estan las cookies firmadas:', req.signedCookies);
    res.json(req.cookies);
});

app.get('/clear', (req, res) => {
    res.clearCookie('name').send('Cookie deleted')
})

app.listen(3000, () => {
    console.log('Servidor escuchado puerto 3000');
});
