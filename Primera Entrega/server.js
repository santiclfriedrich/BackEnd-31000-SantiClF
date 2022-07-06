const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const apiProductRoutes = require("./routes/ProductRoutes")
const apiCartRoutes = require("./routes/CartRoutes")
require('dotenv').config()

//config basica
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//rutas
app.use("/api/productos", apiProductRoutes)
app.use("/api/carrito", apiCartRoutes)

//error 404 not found
app.use((req, res) => {
    res.status(404).json({error: -2, descripcion: `Ruta '${req.route.path}' Método '${req.route.stack[0].method}' - Aun no implementada`});
})


// error en el handler
app.use(function (err, req, res, next) {
    res.status(500).json({
        error: err.message,
    });
});

//Iniciar servidor
app.listen(port, (err) => {
    if (!err) {
        console.log(`Servidor escuchando el puerto: ${port}`)
    } else {
        console.log(`Error al iniciar el servidor: `, err)
    }
})