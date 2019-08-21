const fs = require('fs');


let listadoPorHacer = [];

const guardarDb = () => {

    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, err => {
        if (err) {
            throw new Error('No se pudo grabar', err)
        }
    });
    fs.write
}

const cargarDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
        // console.log(listadoPorHacer);
    } catch (error) {
        listadoPorHacer = [];
    }

}

const crear = (descripcion) => {
    cargarDb();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
    // console.log(listadoPorHacer);
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;

    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDb();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDb();
        return true;

    } else {
        return false;
    }

    //Otro metodo
    // let nuevoListado = listadoPorHacer.filter(tarea => {
    //     return tarea.descripcion !== descripcion;
    // });
    // if (nuevoListado.length === listadoPorHacer.length) {
    //     return false;
    // } else {
    //     listadoPorHacer = nuevoListado;
    //     guardarDb();
    //     return true;
    // }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}