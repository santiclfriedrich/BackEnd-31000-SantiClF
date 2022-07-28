db.usuario.insertMany([{nombre: 'Jeronimo', apellido: 'Perez', edad: 28}, {nombre: 'Manuela', apellido: 'Correa', edad: 20}, {nombre: 'Emanuel', apellido: 'Martinez', edad: 23}, {nombre: 'Pedro', apellido: 'Melini', edad: 65}, {nombre: 'Julieta', apellido: 'Martinez', edad: 30}, {nombre: 'Rocio', apellido: 'Perez', edad: 32},{nombre: 'Antonio', apellido: 'Melini', edad: 35},{nombre: 'Luca', apellido: 'Fornillo', edad: 28},{nombre: 'Lucas', apellido: 'Palermo', edad: 30},{nombre: 'Jose', apellido: 'Fernandez', edad: 28},{nombre: 'Valentina', apellido: 'Perez', edad: 31}])

/* ------------------------------------------------------------------------------------------------------------- */

db.cliente.insertMany([{nombre: 'Jose', edad: 26}, {nombre: 'Juana', edad: 75} ,{nombre: 'Julieta', edad: 28}])
db.articulo.insertMany([{nombre: 'Lapiz', precio: 26, stock: 200}, {nombre: 'Regla', edad: 75, stock: 260} ,{nombre: 'Compas', precio: 28, stock: 90},{nombre: 'Goma', precio: 12, stock: 95}])
ObjectId('62d7f3761faa0204614ba74b').getTimestamp()

/* ------------------------------------------------------------------------------------------------------------- */

db.usuario.find({edad: {$gte: 25}})
db.usuario.find({$and: [{edad: {$gte: 25}}, {edad: {$lte: 35}}]})
db.usuario.find({$or: [{edad: 20}, {edad: 35}]})
db.usuario.find({$and: [{nombre: 'Manuela'}, {apellido: 'Correa'}, {edad: 20}]})
db.usuario.find({$and: [{apellido: 'Perez'}, {edad: {$gte: 20}}]})
db.usuario.find({nombre: {$not: {$eq: 'Jeronimo'}}})
db.usuario.find({apellido: {$not: {$eq: 'Claros'}}})
db.usuario.find({nombre:/^J/});

db.usuario.distinct("nombre")

db.usuario.find({}, {nombre:1, _id:0})
db.usuario.find({}, {edad: 1, apellido: 1, _id: 0})
db.usuario.find({}, {edad: 1, apellido: 1, _id: 1}).pretty() //empieza a andar despues de cierta longitud y con id:1

db.usuario.find().sort({nombre: 1}) //alfabeticamente del mas chico al mas grande
db.usuario.find().sort({edad: 1}) //numericamente del mas chico al mas grande
db.usuario.find().sort({edad: -1}) //y del mas grande al mas chico

db.usuario.find().limit(5).skip(0)

db.usuario.update({nombre: 'Antonio'}, {$set: {nombre: 'Anton'}})
db.usuario.update({nombre: 'Emanuel'}, {$inc: {edad: 1}})
db.usuario.deleteMany({apellido: 'Martinez'})
db.usuario.deleteOne({nombre: 'Pedro'})

db.usuario.findOneAndDelete({apellido: 'Perez'}, {sort: {edad: 1}})

/* --------------------------------------------------------------------------------------------- */
db.cliente.insertMany([
    { "nombre" : "Pablo", "edad" : 25 },
{ "nombre" : "Juan", "edad" : 22 },
{ "nombre" : "Lucia", "edad" : 25 },
{ "nombre" : "Juan", "edad" : 29 },
{ "nombre" : "Fede", "edad" : 35 }
])

db.cliente.find().sort({edad: 1}).limit(1)
db.cliente.find().sort({edad: 1}).limit(1).skip(1)
db.cliente.find({nombre: 'Juan'})
db.cliente.find({nombre: 'Juan', edad: 29})
db.cliente.find({$or: [{nombre: 'Juan'}, {nombre: 'Lucia'}]})
db.cliente.find({edad: {$gt: 25}})
db.cliente.find({edad: {$lte: 25}})
db.cliente.find({edad: {$not: {$eq: 25}}})
db.cliente.find({$and: [{edad: {$gte: 26}}, {edad: {$lte: 35}}]})
db.cliente.update({nombre: 'Fede'}, {$inc: {edad: 1}})
db.cliente.update({edad: 25}, {$inc: {edad: 1}})
db.cliente.deleteMany({nombre: 'Juan'})

//////////////////////////////////////////////////////////////////////////

db.createUser(
    {
      user: "santi", 
      pwd: "1234",
      roles: [
         { role: "read", db: "mibase" } 
      ]
    }
  )


  db.createUser(
    {
      user: "pepe", 
      pwd: "123",
      roles: [
         { role: "readWrite", db: "mibase" } 
      ]
    }
  )