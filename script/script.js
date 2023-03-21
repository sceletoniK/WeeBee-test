let main = null
let links = null
routes = {
    "": "blocks/profile.html",
    "#map": "blocks/map.html",
    "#timer": "blocks/timer.html"
}

async function addPage() {
    
    const page = routes[window.location.hash]
    const html = await fetch(page).then(res => res.text())
    main.innerHTML = html;
    switch(page)
    {
        case("blocks/profile.html"):
            if (timePrinter != null) clearInterval(timePrinter)
            timePrinter = null
            links[0].classList.add("active")
            break;
        case("blocks/map.html"):
            if (timePrinter != null) clearInterval(timePrinter)
            timePrinter = null
            links[1].classList.add("active")
            ymaps.ready(init)
            break;  
        case("blocks/timer.html"):
            if (timePrinter == null) timePrinter = setInterval(printTime, 1000);
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

    changePage()
    window.addEventListener("hashchange", changePage)
}


