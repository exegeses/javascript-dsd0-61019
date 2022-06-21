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