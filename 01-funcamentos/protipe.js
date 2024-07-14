function createPerson(name,apellido){
    return {
        name,
        apellido,
    }
}

const person = createPerson('Isauro ', 'paredes');
console.log(person);