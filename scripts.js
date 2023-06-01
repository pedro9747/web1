function showAlert(){
    alert("Hola desde JavaScript!")
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event){
    event.preventDefault();
    validateForm();
})

function validateForm(){
    const input = document.getElementById("email")
    const inputValue = input.value

    if(!validateEmail(inputValue)){
        alert("Ingresá un eMail válido vieja.")
    } else {
        alert("Correo electrónico válido, bien ahi!")
    }
}

function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
}

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links").
classList.toggle("nav-links-responsive")})