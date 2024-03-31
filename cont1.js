"use strict";
 let elemento = document.querySelector('#segundo');
 let elemento2 = document.querySelector('#minuto');
 let elemento3 = document.querySelector('#hora');
<<<<<<< Updated upstream
 let elemento4 = document.querySelector('#segundo1')
 let elemento5 = document.querySelector('#minuto1')
 let elemento6 = document.querySelector('#hora1')


 let segundo = 0;
 let minuto = 0;
 let hora = 0;

 let segundo1 = 0;
 let minuto1 = 0;
 let hora1 = 0;

 let cron;

 function start(){
     pause();
  cron = setInterval(function() {
     timer();
      elemento.innerHTML = segundo++;
      elemento4.innerHTML = segundo1;
      elemento2.innerHTML = minuto;
      elemento5.innerHTML = minuto1;
      elemento3.innerHTML = hora;
      elemento6.innerHTML = hora1;
      elemento2.innerHTML = minuto;
      elemento3.innerHTML = hora;

     },1000);

 }

 function pause(){
     clearInterval(cron);
 }

 function reset(){
     hora = 0;
     minuto = 0;
     segundo = 0;
     hora1 = 0;
     minuto1 = 0;
     segundo1 = 0;
     document.getElementById('hora').innerText = '0';
     document.getElementById('minuto').innerText = '0';
     document.getElementById('segundo').innerText = '0';
     document.getElementById('hora1').innerText = '0';
     document.getElementById('minuto1').innerText = '0';
     document.getElementById('segundo1').innerText = '0';

 }

 function timer() { 
     if(segundo === 10){
         segundo = 0;
          elemento4.innerHTML = segundo1++;
     } 
    if(segundo1 === 6){
      segundo1 = 0;
      elemento2.innerHTML = minuto++;
    }
    if(minuto === 10){
      minuto = 0;
      elemento5.innerHTML = minuto1++;
    }
    if(minuto1 === 6){
      minuto1 = 0;
      elemento3.innerHTML = hora++;
    }
    if(hora === 10){
      hora = 0;
      elemento6.innerHTML = hora1++;
    }
    if(hora1 === 2 && hora === 4){
      reset()
    }
   

=======

 let segundo = 0;
 let minuto = 0;
 let hora = 0;

 let cron;

 function start(){
     pause();
  cron = setInterval(function() {
     timer();
      elemento.innerHTML = segundo++;
      elemento2.innerHTML = minuto;
      elemento3.innerHTML = hora;
    
     },1000);

 }

 function pause(){
     clearInterval(cron);
 }

 function reset(){
     hora = 0;
     minuto = 0;
     segundo = 0;
     document.getElementById('hora').innerText = '00';
     document.getElementById('minuto').innerText = '00';
     document.getElementById('segundo').innerText = '00';

 }

 function timer() { 
     if(segundo === 60){
         segundo = 0;
          elemento2.innerHTML = minuto++;
     } if(minuto === 60){
         minuto = 0;
         elemento3.innerHTML = hora++;
     }
    
>>>>>>> Stashed changes
 }