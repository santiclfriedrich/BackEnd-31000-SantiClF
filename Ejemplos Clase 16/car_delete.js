const database = require('./database')

const deleteCars = async () => {

    try {

        
        await database.from('car').where('id', '=', 10).del()
        console.log('Car deleted')
        
        database.destroy()
    } catch (err) {
        console.log(err)
        database.destroy()
    }

}

deleteCars()