var time = 0
var timePrinter = null
var timer = setInterval(() => {
    time++
}, 1000);
var timerP = null

function printTime(){
    var hour = (Math.floor(time / 3600)) 
    var min = (Math.floor(time / 60)) % 60
    var sec = (time % 60)
    var timestring = '' + Math.floor(hour/10) + (hour % 10) + ':' + Math.floor(min/10) + (min % 10) + ':' + Math.floor(sec/10) + (sec % 10)
    timerP.innerText = timestring;
}