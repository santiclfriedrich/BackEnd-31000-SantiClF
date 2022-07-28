import admin from "firebase-admin";

import serviceAccount from "./llave.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const main = async () => {
    const db = admin.firestore()
    const User = db.collection('users')
    const Product = db.collection('products')

    try {
        //CREATE
        /*
        const newUser = User.doc()
        await newUser.create({nombre: 'Pepito', apellido: 'Martinez'})

        const newUser2 = User.doc()
        await newUser2.create({ nombre: 'Josefina', apellido: 'Rodriguez' })

        const newUser3 = User.doc()
        await newUser3.create({ nombre: 'Martina', apellido: 'Perez'})

        const newProduct = Product.doc()
        await newProduct.create({ nombre: 'Lapiz', precio: 150, stock: 200 })
        */
    } catch (err) {
        console.log(err)
    }

    try {
        //READ ALL Y POR ID
        const userSnapshot = await User.get()
        const userDoc = userSnapshot.docs

        const response = userDoc.map(user => ({
            id: user.id,
            nombre: user.data().nombre,
            apellido: user.data().apellido
        }))

        console.log(response)

        const josefina = User.doc('J5UyWTHfFstkr5ljAAcF')
        const josefinaDoc = await josefina.get()
        const responseJose = josefinaDoc.data()

        console.log(responseJose)

    } catch (err) {
        console.log(err)
    }

    try {
        //UPDATE

        const pepito = User.doc('q6SgYITEzoySD9Tn0NqQ')
        const pepitoUpdated = await pepito.update({ nombre: 'Juan' })

        console.log('pepitoUpdated', pepitoUpdated)

    } catch (err) {
        console.log(err)
    }

    try {
        //DELETE

        const martina = User.doc('TnzFkfhTeC7Dr9L3rVbM')
        const deletedMartina = await martina.delete()

        console.log('Usuario borrado', deletedMartina)

    } catch (err) {
        console.log(err)
    }
}

main()