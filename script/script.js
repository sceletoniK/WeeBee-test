var main = null
routes = {}
var root = "/WeeBee-test/"
routes[window.location.origin + root] = "blocks/profile.html"
routes[window.location.origin + root + "#map"] = "blocks/map.html"
routes[window.location.origin + root + "#timer"] = "blocks/timer.html"

async function addPage() {
    
    const page = routes[window.location.href]
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
    window.onpopstate = changePage;
    main = document.querySelector('main')
    links = document.querySelectorAll('a')
    links.forEach(item =>{
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            window.history.pushState({},'',item.href)
            changePage(); 
        })
    })
    
    changePage()
}


