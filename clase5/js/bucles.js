let n = 1;
while ( n < 15 )
{
    document.write( n + '<br>' );
    n++;//n = n+1
}

document.write('<hr>');

let marcas = [
    'Hermes', 'Zara', 'Boss',
    'Aeropostale', 'Tommy', 'Hollister'
];
/* mostrar marcas una debajo de la otra */
let cantidad = marcas.length;
let i = 0;
document.write('<ul>');
while ( i < cantidad )
{
    document.write( '<li>'+ marcas[i] +'</li>' );
    i++;
}
document.write('</ul>');