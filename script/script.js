
var main = null
routes = {}
routes["/WeeBee-test/"] = "blocks/profile.html"
routes["/WeeBee-test/map"] = "blocks/map.html"
routes["/WeeBee-test/timer"] = "blocks/timer.html"

async function addPage() {
    
    const page = window.location.pathname
    const html = await fetch(routes[page]).then(res => res.text())
    main.innerHTML = html;
    switch(page)
    {
        case("/WeeBee-test/"):
            if (timePrinter != null) clearInterval(timePrinter)
            timePrinter = null
            links[0].classList.add("active")
            break;
        case("/WeeBee-test/map"):
            if (timePrinter != null) clearInterval(timePrinter)
            timePrinter = null
            links[1].classList.add("active")
            ymaps.ready(init)
            break;  
        case("/WeeBee-test/timer"):
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
    links.forEach(item => 
        item.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.history.pushState({},'',item.href)
        changePage(); 
    }))
    changePage()
}

