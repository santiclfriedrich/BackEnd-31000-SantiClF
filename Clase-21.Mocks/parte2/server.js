import { faker } from '@faker-js/faker'

faker.locale = 'es'

const persona = {
    nombre: faker.name.firstName(),
    genero: faker.name.gender(),
    apellido: faker.name.lastName(),
    email: faker.internet.email(),
    direccion: faker.address.streetAddress(),
    trabajo: faker.name.jobTitle(),
    pais: faker.address.country(),
    mascota: faker.animal.type(),
    hobbie: faker.random.word()
}

console.log(persona)