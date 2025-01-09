function showLogin() {
    window.location.href = 'login.html'; 
}
function showregister() {
    window.location.href = 'register.html';
}

const dark = function() {
    document.querySelector("h1").style.backgroundColor="black"
    document.querySelector(".teme").textContent="light"
    document.querySelector("h1").style.color= "bisque"
}
function dark1(){
    document.querySelector("h1").style.color="red"
    document.querySelector("h1").style.backgroundColor="transparent"
    document.querySelector(".teme").textContent="dark"
}

const mynewcolors=document.getElementById("color")
const mynewbox=document.getElementById("box")

mynewcolors.addEventListener("change",function(){
    mynewbox.style.backgroundColor= mynewcolors.value
    mynewbox.textContent= mynewcolors.value
})

const mainform=document.getElementById("myform")
const namein = document.getElementById("name")
const result = document.getElementById("nameInput")
mainform.addEventListener('input',function dtachg(e){
 e.preventDefault()
    namein.textContent= result.value
})
