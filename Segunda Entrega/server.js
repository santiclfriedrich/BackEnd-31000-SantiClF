import express from "express";
const app = express();

//env
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 8080;


//config basica
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//rutas
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import rutas from "./routes/IndexRoutes.js";

//rutas estáticas - public
app.use(express.static(path.join(__dirname, "../public")));

/*
                      APP
*/


//rutas

app.use("/api", rutas);
app.use("/*", (req, res) => {
  res.status(404).send({
    error: -2,
    descripcion: `Ruta ${req.url} con método ${req.method} aún no implementada`,
  });
});



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
server.listen(port, (error) => {
    try {
      console.log("El servidor está escuchando el puerto: ", port);
    } catch {
      console.log("Error al iniciar el server: ", error);
    }
  });