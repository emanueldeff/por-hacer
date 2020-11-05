const fs = require('fs');

let listadoPorHacer = []


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;

        console.log('The file has been saved!');

    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


    return listadoPorHacer;
}

const Actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;

        guardarDB();

        return true;

    } else {

        return false;
    }

}

const Borrar = (descripcion) => {

    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListado.length === listadoPorHacer.length) {

        return false;

    } else {
        listadoPorHacer = nuevoListado;

        guardarDB();

        return true;
    }
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    }

    cargarDB().push(porHacer)

    guardarDB();

    return porHacer;
}


module.exports = {
    crear,
    cargarDB,
    Actualizar,
    Borrar
}