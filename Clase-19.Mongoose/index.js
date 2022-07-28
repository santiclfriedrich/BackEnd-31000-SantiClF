import mongoose from "mongoose";
import User from "./models/user.js";

const main = async () => {
    const URL = 'mongodb://localhost:27017/mibasedos'

    await mongoose.connect(URL)

    console.log("Conexion establecida con la db")

    const user = { nombre: 'Juana', apellido: 'Martinez', email: 'jm@gmail.com', password: 123, usuario: 'juana'}
    //const juanaModel = new User(user)

    //await juanaModel.save()

    console.log('Juana guardada en la db')

    const users = [{nombre: 'Pepe', apellido: 'Martinez', email: 'pm@gmail.com', password: 123, usuario: 'pepe'}, {nombre: 'Pedro', apellido: 'Perez', email: 'pp@gmail.com', password: 123, usuario: 'pedrito'}]

    await User.insertMany(users)

    console.log('Usuarios insertados')
}

main()