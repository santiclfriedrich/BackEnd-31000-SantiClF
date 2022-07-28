// mongo
// use commerce

// Agregar mensajes
db.mensajes.insertOne({socketId: 'kjfnerlhl', us: 'santi', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas?', fh: '04/04/2022 00:36:36'})
db.mensajes.insertMany([{socketId: 'kjfnerlhl', us: 'pedro', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}, {socketId: 'kjfnerlhl', us: 'santi', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}, {socketId: 'kjfnerlhl', us: 'pedro', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}, {socketId: 'kjfnerlhl', us: 'santi', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}, {socketId: 'kjfnerlhl', us: 'pedro', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}, {socketId: 'kjfnerlhl', us: 'santi', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}, {socketId: 'kjfnerlhl', us: 'pedro', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}, {socketId: 'kjfnerlhl', us: 'santi', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}, {socketId: 'kjfnerlhl', us: 'pedro', mail: 'pedroclaros@gmail.com', mensaje: 'Hola como estas', fh: '04/04/2022 00:36:36'}])

//-------------------------------------------------------------------------------------------------------------------------

// Agregar productos
db.productos.insertOne({
                categ: "zapatillas",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn2.iconfinder.com/data/icons/shoes-7/128/flat-04-512.png",
                nombre: "Vans Old Skool",
                precio: 4990,
                sku: "17",
                created_at: new Date(),
                stock: 100
            })

db.productos.insertMany([{
                categ: "zapatillas",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn1.iconfinder.com/data/icons/sneakers-2/100/10-512.png",
                nombre: "Converse Chuck Taylor",
                precio: 580,
                sku: "3",
                created_at: new Date(),
                stock: 10
            },
            {
                categ: "zapatillas",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn1.iconfinder.com/data/icons/cool-shoes/200/ziyuan_19-256.png",
                nombre: "Nike Jordan",
                precio: 900,
                sku: "2",
                created_at: new Date(),
                stock: 40
            },
            {
                categ: "zapatillas",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn2.iconfinder.com/data/icons/shoes-6/128/outline_col-03-256.png",
                nombre: "Adidas Original",
                precio: 1280,
                sku: "23",
                created_at: new Date(),
                stock: 81
            },
            {
                categ: "remeras",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn2.iconfinder.com/data/icons/shoes-8/128/bw-04-512.png",
                nombre: "Remera Vans",
                precio: 4990,
                sku: "1",
                created_at: new Date(),
                stock: 410
            },
            {
                categ: "remeras",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/230_Nike_logo-512.png",
                nombre: "Remera Nike",
                precio: 1700,
                sku: "4",
                created_at: new Date(),
                stock: 4510
            },
            {
                categ: "remeras",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn0.iconfinder.com/data/icons/logos-21/40/Adidas-128.png",
                nombre: "Remera Adidas",
                precio: 2300,
                sku: "32",
                created_at: new Date(),
                stock: 6852
            },
            {
                categ: "remeras",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn0.iconfinder.com/data/icons/logos-21/40/Gucci-128.png",
                nombre: "Remera Gucci",
                precio: 2860,
                sku: "23",
                created_at: new Date(),
                stock: 48569
            },
{
                categ: "remeras",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn2.iconfinder.com/data/icons/clothes-apparel/96/T-shirt-256.png",
                nombre: "Remera Negra Lisa",
                precio: 3350,
                sku: "23",
                created_at: new Date(),
                stock: 48569
            },
            {
                categ: "remeras",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn0.iconfinder.com/data/icons/sport-fourteen-black-and-white/128/T-shirt-sportswear-clothes-uniform-256.png",
                nombre: "Remera Argentina Messi",
                precio: 4320,
                sku: "51",
                created_at: new Date(),
                stock: 6778
            }])

db.mensajes.find().pretty() // Ver mensajes
db.productos.find().pretty() // Ver productos

db.mensajes.find().count()
db.productos.find().count()

db.productos.insertOne({
                categ: "zapatillas",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn1.iconfinder.com/data/icons/sneakers-2/100/04-256.png",
                nombre: "Zapatillas Puma",
                precio: 70,
                sku: "17",
                created_at: new Date(),
                stock: 100
            })

db.productos.find({nombre: 'Zapatillas Puma'}).pretty()

db.productos.find({precio: {$lt: 1000}}).pretty()

db.productos.find({$and: [{precio: {$gte: 1000}}, {precio: {$lte: 3000}}]}).pretty()

db.productos.find({precio: {$gt: 3000}}).pretty()

db.productos.find({}, {nombre: 1, _id: 0}).sort({precio: 1}).limit(1).skip(2).pretty()

db.productos.updateMany({}, {$set: {'stock': 100}})

db.productos.updateMany({precio: {$gt: 4000}}, {$set: {stock: 0}})

db.productos.deleteMany({precio: {$lt: 1000}})

// use admin
db.createUser({user: 'pepe', pwd: 'asd456', roles:[{role: 'read', db: 'commerce'}]})
db.getUsers()
exit

// mongo -u pepe -p asd456 --authenticationDatabase ecommerce

db.productos.insertOne({
                categ: "zapatillas",
                descrip: "Descripción detallada del producto que se esta listando en esta sección del e-commerce.",
                img: "https://cdn2.iconfinder.com/data/icons/clothes-shoes-vol-2/64/reebok-128.png",
                nombre: "Zapatilla Rebook",
                precio: 70,
                sku: "17",
                created_at: new Date(),
                stock: 100
            })

exit
// mongodump --host="localhost" --port=27017
