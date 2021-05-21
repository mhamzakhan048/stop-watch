
var minH = document.getElementById('min')
var secH = document.getElementById('sec')
var msecH = document.getElementById('msec')

var min = 00;
var sec = 00;
var msec = 00;
var interval;


function timer(){
    msec++
    msecH.innerHTML = msec
    if(msec == 100 ){
        sec++
        secH.innerHTML= sec
        msec=00
    }else if(sec == 60){
        min++
        minH.innerHTML=min
        sec = 00
    }
}
 

function start(){
  interval =  setInterval(timer,10) 
}

function pause(){
    clearInterval(interval)
}

function reset(){
    msec= 00;
    sec= 00;
    min= 00;

    msecH.innerHTML= msec;
    secH.innerHTML= sec;
    minH.innerHTML= min;
    clearInterval(interval)
}