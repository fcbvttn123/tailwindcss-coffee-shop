// Email Input Animation

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




// Carousel

let forwardIcon = document.querySelector("[data-arrow-forward-icon]")
let backIcon = document.querySelector("[data-arrow-back-icon]")
let carousel = document.querySelector("[data-product-box]")
let carouselItemsHTMLElement = document.querySelectorAll("[data-carousel-item]")

let currentIndex = 0;
let itemsToShow = window.innerWidth <= 890 ? 1 : 4;

window.addEventListener("resize", e => {
    if(window.innerWidth <= 890) {
        itemsToShow = 1
    }
})

forwardIcon.addEventListener("click", (e) => {
    if (currentIndex < carouselItemsHTMLElement.length - itemsToShow) {
        currentIndex++;
        updateSlider();
    }
});

backIcon.addEventListener("click", (e) => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const translateValue = -currentIndex * (100 / itemsToShow);
    carousel.style.transform = `translateX(${translateValue}%)`;
}




// Menu

let mobileMenuHTMLElement = document.querySelector("[data-mobile-menu]")
let openMenuIconHTMLElement = document.querySelector("[data-open-menu-icon]")
let closeMenuIconHTMLElement = document.querySelector("[data-close-menu-icon]")

openMenuIconHTMLElement.addEventListener("click", e => {
    mobileMenuHTMLElement.style.display = "block"
    mobileMenuHTMLElement.style.animationName = "show-mobile-menu"
})

closeMenuIconHTMLElement.addEventListener("click", e => {
    mobileMenuHTMLElement.style.animationName = "hide-mobile-menu"
    mobileMenuHTMLElement.style.display = "none"
})