import mongoose from "mongoose";
import User from './models/user'

const main = async () => {
    await mongoose.connect('mongodb+srv://santi:santi123@cluster0.judbcat.mongodb.net/mibasetres?retryWrites=true&w=majority')
    console.log('Conexion establecida')

    const users = await User.find()

    console.log(users)
}

main()