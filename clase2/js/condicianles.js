// pedirle al usuario que ingrese un número
let numero = parseInt( prompt('Ingrese un número') );

/*
si el número es menor que 100
        que diga 'es menor'
si (en cambio) el número no es menor que 100
        que diga 'NO es menor'
*/
if ( numero < 100 ) 
{
    document.write('es menor');
}
else
{
    document.write('NO es menor');
}