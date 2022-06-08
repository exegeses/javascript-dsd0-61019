let caraDado = document.getElementById('caraDado');

function tirarDado()
{
    //generamos número aleatorio entre 0 y 1
    let numeroAleatorio = Math.random();
        console.log( numeroAleatorio );

    //convertimos el número para que sea entre 1 y 6
    let numeroMultiplicado = (numeroAleatorio * 5) + 1;
        console.log( numeroMultiplicado );

    //quitamos los decimales
    //let numero = Math.trunc( numeroMultiplicado );
    let numero = Math.round( numeroMultiplicado );
        console.log( numero );

    //modificamos la imagen del dato
    caraDado.src = 'img/dado'+ numero +'.png';
}

tirarDado();