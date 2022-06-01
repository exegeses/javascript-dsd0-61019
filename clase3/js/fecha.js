//ubicamos elemento dentro del DOM
let txt = document.getElementById('txt');

/* mostrar la fecha actual
    con el formato: 31/05/2022
*/

//creamos un objeto de fecha
//  y lo almacenamos en una variable
let fecha = new Date();
    // Tue May 31 2022 21:37:31 GMT-0300 (hora estándar de Argentina)

//obtenemos el número del día del mes | del 1 al 31
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}

//obtenemos el número del mes actual
let mes = fecha.getMonth()+1;
if( mes < 10 ){
    mes = '0'+ mes;
}


//obtenemos el número del año 
let anio = fecha.getFullYear();

//escribimos dentro del span
txt.innerText = diaMes +'/'+ mes +'/'+ anio;
    