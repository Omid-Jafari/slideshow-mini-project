// variables
let slideshow = document.querySelector(".slideshow")
let slides = document.querySelectorAll(".slide")
let points = document.querySelectorAll(".points > span")
let timer = 2000
let active = 0
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

// functions
let goNext = () => {
    active = (active == slides.length - 1) ? 0 : active + 1   
    classSwitcher()
}

let goPrev = () => {
    active = (active == 0) ? slides.length -1 : active - 1
    classSwitcher()
}

// setInterval
let runSlideshow = setInterval(goNext, timer)

function classSwitcher () {
    slides.forEach(slide => slide.classList.remove("active"))
    points.forEach(point => point.classList.remove("active"))
    slides[active].classList.add("active")
    points[active].classList.add("active")
}

// next button
next.addEventListener("click", e => goNext())

// prev button
prev.addEventListener("click", e => goPrev())

// points event 
points.forEach((point , index) => {
    point.addEventListener("click", e => {
        active = index
        classSwitcher()
    })
})

// mouseover 
slideshow.addEventListener("mouseover", e => clearInterval(runSlideshow))

// mouseleave
slideshow.addEventListener("mouseleave", e => runSlideshow = setInterval(goNext, timer))