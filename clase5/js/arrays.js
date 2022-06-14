/*
let marca = 'Hermes';
let marca2 = 'Zara';
let marca3 = 'Boss';
let marca4 = 'Aeropostale';
let marca5 = 'Tommy';
let marca6 = 'Hollister';
*/
/*
let marcas = new Array(
                'Hermes', 'Zara', 'Boss',
                       'Aeropostale', 'Tommy', 'Hollister'
                     );

 */

let marcas = [
                'Hermes', 'Zara', 'Boss',
                'Aeropostale', 'Tommy', 'Hollister'
             ];
console.log( marcas );
let txt = document.getElementById("txt")
txt.innerText = marcas[2];

/* mostrar el día de la semana */
let fecha = new Date();
//obtener el número del día de la semana
let numDiaSemana = fecha.getDay(); // del 0 al 6
//creamos array con los días de la semana
let semana = [
                'Domingo', 'Lunes', 'Martes',
                'Miércoles', 'Jueves', 'Viernes',
                'Sábado'
             ]

document.write(semana[numDiaSemana]);
