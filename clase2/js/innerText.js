/*
pedir al visitante que ingrese su nombre
    y guardarlo en una variable
escribir el nombre dentro del span 
*/
let nombre = prompt( 'ingrese su nombre' );

document.getElementById('txt').innerText = nombre;