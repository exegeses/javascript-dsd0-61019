//for( inicio; límite; incremento )
for ( let n = 0; n < 15; n++ )
{
    document.write(n);
}
 /* ahora con un array */
let italianos = [
    'Maseratti', 'Pagani',
    'Larmborghini', 'Ferrari',
    'Alfa Romeo', 'Alpine',
    'Bugatti', 'Lancia',
    'Fiat', 'Mazzanti',
    'Fornassari', 'Abarth'
];
let lista2 = document.getElementById("lista2");
let cantidad = italianos.length;
codigoHTML = '<ul>';

for ( let n = 0; n < cantidad; n++ )
{
    codigoHTML = codigoHTML + '<li>'+italianos[n]+'</li>';
}
codigoHTML = codigoHTML + '</ul>';

lista2.innerHTML = codigoHTML;