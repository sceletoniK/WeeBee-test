var page = "blocks/profile.html"
var main = null
routes = {}
routes[(window.location.origin + "/profile")] = "blocks/profile.html"
routes[(window.location.origin + "/map")] = "blocks/map.html"
routes[(window.location.origin + "/timer")] = "blocks/timer.html"

async function addPage() {
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

function changePage(value){
    links.forEach(item => item.classList.remove("active"))
    page = routes[value]
    addPage()
}

function Load(){
    main = document.querySelector('main')
    links = document.querySelectorAll('a')
    links.forEach(item => item.addEventListener('click', (e) => {
        
        changePage(item.href); e.preventDefault();
    }))
    addPage()
}

