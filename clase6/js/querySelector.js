/* ubicar un elemento dentro del DOM por su id */
//let caja = document.getElementById('caja');
let caja = document.querySelector('#caja');
    caja.style.backgroundColor = '#6d6';

/* ubicar varios elementos por su nombre */
let ies = document.getElementsByTagName('i');
    console.log(ies);
    ies[1].style.color = '#292';

/* ubicar elementos por su nombre de clase */
let links = document.getElementsByClassName('link');
    console.log(links);
    let cantidad = links.length
for( let n = 0; n < cantidad; n++ )
{
    links[n].style.textDecoration = 'none';
    links[n].style.color = '#f60';
    links[n].style.padding = '8px';
}

/* ubicar todos los h2 */
//let h2s = document.getElementsByTagName('h2');
let h2s = document.querySelectorAll('h2');
    console.log(h2s);
    h2s[3].style.color = '#f60';

/*
*  ubicar el input con el name = "nombre"
*  obtener el texto que hay escrito en el input
*  y luego imprimirlo en el span
* */
let nombre = document.querySelector('input[name="nombre"]');
let txt = document.querySelector('#txt');
function mostrarTexto()
{
    txt.innerText = nombre.value;
}