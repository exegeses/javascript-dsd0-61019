//ubicamos elemento dentro del DOM
let caja = document.getElementById('caja');

// modificamos atributos: ancho, altura, color
// en este caso SIN INTERACTIVIDAD
/*
caja.style.width  = '300px';
caja.style.height = '250px';
caja.style.backgroundColor = '#26a';
*/

//declaramos una función
function modAtributos()
{
    caja.style.width  = '300px';
    caja.style.height = '250px';
    caja.style.backgroundColor = '#26a';
    caja.style.borderRadius = '10px';
}
function reset()
{
    caja.style.width  = '200px';
    caja.style.height = '200px';
    caja.style.backgroundColor = '#c9c9c9';
    caja.style.borderRadius = '0px';    
}