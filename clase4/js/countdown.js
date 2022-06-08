//ubicamos elementos dentro del DOM
let txtDias = document.getElementById('txtDias');
let txtHoras = document.getElementById('txtHoras');
let txtMinutos = document.getElementById('txtMinutos');
let txtSegundos = document.getElementById('txtSegundos');

//declaramos función de control
function countdown()
{
    let ahora = new Date();
    let final = new Date(2022, 7, 17);
    //como la fecha tiene un formato crudo y no podemos hacer cáculos
    // necesitamos convertirla a timestamp (segundos desde el 1/1/1970)
    let actual = ahora.getTime();
    let evento = final.getTime();
    //diferencia entre fechas expresada en milisegundos
    let diferencia = evento - actual;

    //obtenemos la diferencia expresada en segundos, minutos, horas y días
    let segundos = Math.trunc( diferencia/1000 );
    let minutos  = Math.trunc( segundos/60 );
    let horas    = Math.trunc( minutos/60 );
    let dias     = Math.trunc( horas/24 );

    //obtenemos los sobrantes
    horas = horas%24;
    minutos = minutos%60;
    segundos = segundos%60;

    //imprimimos segundos, minutos, horas y dias
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

//invocamos la función
countdown();