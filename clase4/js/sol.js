//ubicar elemento dentro del DOM
let sol = document.getElementById('sol');

let grados = 0;
function rotar()
{
    grados++; //grados = grandos + 1;
    sol.style.transform = 'rotate(' + grados + 'deg)'; //rotate(15deg)
    sol.style.transition = '300ms';
}

rotar();
setInterval( rotar, 100 );