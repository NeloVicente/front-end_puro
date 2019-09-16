const menu = document.querySelector("#btnMenu")
const divMenu = document.querySelector("#menu-List")

menu.addEventListener("click", function(){
    divMenu.classList.toggle("disabled")
})