//require

const argv = require('./config/yargs').argv

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log(porHacer.crear(argv.descripcion));
        break;

    case 'listar':

        let listado = porHacer.cargarDB();

        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log(tarea.completado);
        }
        break;

    case 'actualizar':

        let actualizado = porHacer.Actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':
        let borrado = porHacer.Borrar(argv.descripcion);
        console.log(borrado);

        break;

    default:
        console.log("no se reconoce");
}