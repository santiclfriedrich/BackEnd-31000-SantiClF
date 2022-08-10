import express from 'express';
import session from 'express-session';

const app = express();

app.use(session({
    secret: 'coderhouse',
    resave: false,
    saveUninitialized: true,
})
);

app.get('/', (req, res) => {

    if(req.session.contador) {
        req.session.contador++

        const mensaje = req.session.user ? `${req.session.user} has visitado la pagina ${req.session.contador} veces ` :
        `has visitado la pagina ${req.session.contador} veces`

        return res.send(mensaje);
    }

    req.session.contador = 1
    req.session.user = req.query.name

    const mensaje = req.query.name ? `Bienvenido ${req.query.name}` : 'Bienvenido'

    res.send(mensaje)
});

app.get('/olvidar', (req, res) => {
    const mensaje = req.session.user ? `Bienvenido ${req.session.user}` : 'Hasta luego'

    req.session.destroy(err => {
        if(!err) {
           return res.send(mensaje)
        }

        res.status(500).json({ error : err })

    })
})

app.listen(3000, () => {
    console.log('Ok')
});