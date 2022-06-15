let lista = document.getElementById('lista');
let marcas = [
    'Hermes', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Hollister'
];

/* imprimir la lista de marcas DENTRO del div lista */
let cantidad = marcas.length;
let n = 0;

let codigoHTML = '<ul>';
while ( n < cantidad )
{
    codigoHTML = codigoHTML + '<li>'+marcas[n]+'</li>'
    n++;
}
codigoHTML = codigoHTML + '</ul>';

lista.innerHTML = codigoHTML;

