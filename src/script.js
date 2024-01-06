let emailInput = document.querySelector("input[type='email']")

emailInput.addEventListener("focusout", e => {
    if(!e.target.checkValidity() || e.target.value=="") {
        e.target.style.borderTop = "none"
        e.target.style.borderRight = "none"
        e.target.style.borderLeft = "none"
        e.target.style.borderBottom = "2px solid #873832"
    } else {
        e.target.style.border = "2px solid black"
    }
})




let forwardIcon = document.querySelector("[data-arrow-forward-icon]")
let backIcon = document.querySelector("[data-arrow-back-icon]")
let carousel = document.querySelector("[data-product-box]")
let carouselItemsHTMLElement = document.querySelectorAll("[data-carousel-item]")

let visibleCarouselItems = 4
let newCarouselItemComingIn = visibleCarouselItems
let carouselItemTotal = carouselItemsHTMLElement.length
let transformPercent = 0

forwardIcon.addEventListener("click", e => {
    newCarouselItemComingIn += 1
    if(newCarouselItemComingIn > carouselItemTotal) {
        newCarouselItemComingIn = newCarouselItemComingIn - 1
        return
    }
    transformPercent += (-100 / visibleCarouselItems)
    moveCarousel(transformPercent)
})

backIcon.addEventListener("click", e => {
    if(transformPercent == 0) {
        return
    }
    newCarouselItemComingIn -= 1
    transformPercent += (100 / visibleCarouselItems)
    moveCarousel(transformPercent)
})

function moveCarousel(transformPercent) {
    carousel.style.transform = `translateX(${transformPercent}%)`
}