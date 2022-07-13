const express = require('express');
const app = express();
const puerto = 8080;
const path = require('path');
const expressServer = app.listen(puerto, () => {
    try{
        console.log(`Servidor escuchando el puerto: ${puerto}`)
    }
    catch(error){
        console.log("No se pudo iniciar el servidor: ", error);
    }
});

const { Server: IOServer } = require('socket.io');
const io = new IOServer(expressServer);

const db = require('../database');

const ProductClass = require('../classProducts');
let products_C = new ProductClass(db.databaseConnection, 'products');

const MsjClass = require('../classMsg');
let messages_C = new MsjClass(db.dblite, 'messages');

//CONTAINER ARCHIVOS
const Contenedor = require('./contenedor.js');
chatLog = new Contenedor;


//ACCESO AL BODY
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//RUTAS ESTATICAS
app.use(express.static(path.join(__dirname, '../public')));

//IO SOCKETS
io.on('connection', async socket => {
    console.log('Se conecto un usuario nuevo', socket.id)
    socket.emit('server:products', await products_C.getAll())

    

    socket.on('client:product', async product => {
        products_C.save(product)
        io.emit('server:product', product)
})

    socket.emit('server:msgs', await messages_C.getAll());
    socket.on('client:msg', async msgInfo => {
        messages_C.save(msgInfo);
        io.emit('server:msgs', await messages_C.getAll())
    })

    socket.on('cliente:typing', typeValue => {
        socket.broadcast.emit('server:typing', typeValue)
    })

})