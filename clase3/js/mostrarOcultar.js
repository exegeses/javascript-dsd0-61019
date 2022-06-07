//ubicar elemento/s dentro del DOM
let caja = document.getElementById('caja');

//declaración de función/es de control
function ocultar()
{
    caja.style.display = 'none';
}
function mostrar()
{
    caja.style.display = 'block';
}

function ocultarMostrar()
{
    if ( caja.style.display == 'block' ) {
        //caja.style.display = 'none';
        ocultar();
    }
    else {
        //caja.style.display = 'block';
        mostrar();
    }

}