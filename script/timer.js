let timePrinter = undefined
let time = 0
let timer = setInterval(() => {
    time++;
}, 1000);

function printTime(){
    let hour = (Math.floor(time / 3600))
    let min = (Math.floor(time / 60)) % 60
    let sec = (time % 60)
    let timestring = `${Math.floor(hour/10)}${(hour % 10)}:${Math.floor(min/10)}${(min % 10)}:${Math.floor(sec/10)}${(sec % 10)}`
    timerP.innerText = timestring;
}