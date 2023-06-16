let main;
let links;
routes = {
    "": "blocks/profile.html",
    "#map": "blocks/map.html",
    "#timer": "blocks/timer.html"
}

window.onload = Load

async function addPage() {
    
    const page = routes[window.location.hash]
    const html = await fetch(page).then(res => res.text())
    main.innerHTML = html;
    switch(page)
    {
        case(routes[""]):
            if(timePrinter){
                clearInterval(timePrinter)
                timePrinter = undefined
            }
            links[0].classList.add("active")
            break;
        case(routes["#map"]):
            if(timePrinter){
                clearInterval(timePrinter)
                timePrinter = undefined
            }
            links[1].classList.add("active")
            ymaps.ready(init)
            break;  
        case(routes["#timer"]):
            if (!timePrinter) timePrinter = setInterval(printTime, 1000);
            timerP = document.querySelector(".timer_text")
            printTime()
            links[2].classList.add("active")
            break;
    }
}

function changePage(){
    links.forEach(item => item.classList.remove("active"))
    addPage()
}

function Load(){

    main = window.document.querySelector("main")
    links = window.document.querySelectorAll("a")
    window.addEventListener("hashchange", changePage)
    changePage()
}


