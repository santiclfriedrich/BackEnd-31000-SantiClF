const database = require('./database')

const insertCars = async () => {

    try {
        const cars = [
            { brand: "Volkswagen", model: 'Gol', year: 2015, price: 1000 },
            { brand: "Volkswagen", model: 'Gol Trend', year: 2019, price: 1500 },
            { brand: "Toyota", model: 'Corolla', year: 2020, price: 50000 },
            { brand: "Ford", model: 'Super GT', year: 2022, price: 10000 },
            { brand: "Lamborghini", model: 'Gallardo', year: 2021, price: 500000 }
        ]

        await database('car').insert(cars)
        console.log('Cars inserted!')

        database.destroy()
    } catch (err) {
        console.log(err)
        database.destroy()
    }

}

insertCars()