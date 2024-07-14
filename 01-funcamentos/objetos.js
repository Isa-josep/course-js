let personaje={
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        latitud: 34.034,
        longitud: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
};
console.log(personaje.trajes.length);
console.log(personaje.trajes[personaje.trajes.length-1]);

const jsonString = Object.entries(personaje);
console.log(jsonString);