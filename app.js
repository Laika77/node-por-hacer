const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];
switch (comando) {
    case 'crear':
        // console.log('TODO por hacer');
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        // console.log(porHacer.guardarDb());

        break;;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("=====Por Hacer=====".green);
            console.log('tarea: ', tarea.descripcion.red);
            console.log('estado: ', tarea.completado);
            console.log("===================".green);

        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.comando);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break
    default:
        console.log('Comando no es reconocido');
        break;

}