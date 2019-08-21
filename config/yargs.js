const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    default: true,
    demand: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}


// .command('listar', 'Lista las tareas por hacer', optsCrear)

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', { descripcion })
    .command('actualizar', 'Actualiza una tarea previamente guardada', { descripcion, completado })
    .command('listar', 'Lista las tareas por hacer guardadas')
    .command('borrar', 'Elimina una tarea de la listas guardadas', { descripcion })
    .help()
    .argv;


module.exports = {
    argv
}