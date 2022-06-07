//ubicamos elemento dentro del DOM
let txt = document.getElementById("txt");

//declaramos función de control
function reloj()
{
    //creamos un objeto de fecha
    let fecha = new Date();

    //obtenemos las horas
    let horas = fecha.getHours();
    //obtenemos los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0' + minutos;
    }
    //obtenemos os segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0' + segundos;
    }

    //mostrar la hora con formato
    //19:24:45
    txt.innerText = horas +":"+ minutos +":"+ segundos;
}

//invocamos la función reloj()
reloj();

//actualizamos el llamado a la función reloj()
setInterval( reloj, 1000 );