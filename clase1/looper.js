console.log('hola mundo');

let numero = 0;
let space = '';
function looper(){
    ++numero;
    space += ' ';
    console.log( space + numero );
    if(numero===1000)
    {
        clearInterval(laps);
    }
}
let laps = setInterval( looper );
