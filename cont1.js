"use strict";
let elemento = document.querySelector('#segundo');
let elemento2 = document.querySelector('#minuto');
let elemento3 = document.querySelector('#hora');
let segundo = 0;
let minuto = 0;
let hora = 0;



 setInterval(function() {
    timer();
    let cont = elemento.innerHTML = segundo++;
    let cont2 = elemento2.innerHTML = minuto;
    let cont3 = elemento3.innerHTML = hora;
    
    },1000);

function timer() { 
    if(segundo === 60){
        segundo = 0;
       let cont2 = elemento2.innerHTML = minuto++;
    } if(minuto === 60){
        minuto = 0;
        let cont3 = elemento3.innerHTML = hora++;
    }
    

}