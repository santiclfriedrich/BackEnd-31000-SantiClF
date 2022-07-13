const database = require('./database')

const updateCar = async () => {

    try {
        await database.from('car').where("id", '=', '1').update({ price: 1000, year: 2016 })
        console.log('Car with id 1 updated')
        
        database.destroy()
    } catch (err) {
        console.log(err)
        database.destroy()
    }

}

updateCar()