let emailInput = document.querySelector("input[type='email']")
let forwardIcon = document.querySelector("[data-arrow-forward-icon]")
let productBox = document.querySelector("[data-product-box]")

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

forwardIcon.addEventListener("click", e => {
    let firstItem = productBox.querySelector("div:first-child")
    firstItem.style.transform = `translateX(-100%)`

    // let productBoxWidth = productBox.offsetWidth
    // productBox.style.transform = `translateX(-${productBoxWidth/4}px)`
})