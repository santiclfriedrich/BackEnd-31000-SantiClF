const express = require("express")
const routesApi = require("./routes/indexApiRoutes.js").router;
const routesProdTest = require("./routes/ProductsTest").router;
const ChatContainer = require("./Chat");
const { contenedorProductos } = require("./controllers/apiController.js")
const { Server: IOServer } = require("socket.io");
const normalizeMsj = require("../util/normalize.js");
const session = require("express-session")
const cookieParser = require("cookie-parser")
const MongoStore = require("connect-mongo")

const mongoStoreOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const chat = new ChatContainer("chats", {
    author: {
        id: { type: String, required: true },
        nombre: { type: String, required: true },
        apellido: { type: String, required: true },
        edad: { type: Number, required: true },
        alias: { type: String, required: true },
        avatar: { type: String, required: true }
    },
    text: { type: String, required: true }
});

const path = require("path")
const app = express();
const port = 8080;

/* post url encode */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl:
            "mongodb+srv://santi:santi123@cluster0.judbcat.mongodb.net/coderhouse?retryWrites=true&w=majority",
        mongoStoreOptions,
    }),
    secret: "coderhouse",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    },
    rolling: true
}))

/* rutas estaticas */
app.use(express.static(path.join(__dirname, "../public")))

function auth(req, res, next) {
    if (req.session.admin === true) {
        next();
    } else {
        res.status(401).json({ status: 401, code: "no credentials" })
    }
}

app.get("/logged", (req, res) => {
    if (req.session.admin === true) {
        res.json({ status: "ok", user: req.session.user })
    } else {
        res.status(401).json({ status: 401, code: "no credentials" })
    }
})

app.get("/session-test", (req, res) => {
    if (req.session.contador) {
        req.session.contador++;
        return res.send("visitas: " + req.session.contador)
    } else {
        req.session.contador = 1;
        res.send("esta es tu primera visita")
    }
})

app.get("/login", (req, res) => {
    const { username } = req.query;
    req.session.user = username;
    req.session.admin = true;

    res.json({ status: 'ok', user: req.session.user })
})

app.get("/logout", (req, res) => {
    const user = req.session.user;
    req.session.destroy(err => {
        if (err) {
            res.status(500).json({ status: "error", body: err })
        } else {
            res.json({ status: "ok", user })
        }
    })
})

/* main rutas */
app.use("/api/productos", routesApi)
app.use("/api/productos-test", routesProdTest)

/* ruta no encontrada */
app.use((req, res) => {
    res.status(404).json({error404: "Ruta no encontrada"});
})

/* handler error */
app.use(function (err, req, res, next) {
    res.status(500).json({
        error: err.message,
    });
});

/* iniciar server */
const expressServer = app.listen(port, (err) => {
    if (!err) {
        console.log(`El servidor se inicio en el puerto ${port}`)
    } else {
        console.log(`Hubo un error al iniciar el servidor: `, err)
    }
})

const io = new IOServer(expressServer);

io.on("connection", async socket => {
    console.log("Nuevo usuario conectado")

    /*
    
    const productos = await contenedorProductos.getAll();

    socket.emit("server:items", {productos, mensajes})
    */

    const mensajes = await chat.getAll();

    const normalizedMsj = normalizeMsj(mensajes)

    socket.emit("server:items-test", { productos: [], mensajes: normalizedMsj })


    socket.on("client: producto", async producto => {
        await contenedorProductos.save(producto);

        io.emit("server:producto", producto);
    })

    socket.on("client:mensaje", async mensajeEnvio => {
        const savedMsj = await chat.save(mensajeEnvio);

        io.emit("server:mensaje", savedMsj);
    })
})

