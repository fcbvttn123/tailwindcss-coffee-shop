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