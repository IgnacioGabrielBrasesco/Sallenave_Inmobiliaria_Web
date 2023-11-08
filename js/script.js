const menu = document.querySelector("ul");

const boton_hamburguesa = document.querySelector(".hamburguesa");



boton_hamburguesa.addEventListener("click", ()=> {
    if(!menu.className.includes("active")){
        menu.classList.add("active");
    } else{
        menu.classList.remove("active");
    }
})
