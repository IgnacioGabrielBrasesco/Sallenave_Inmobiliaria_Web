//Menu hamburguesa: primero seleccione lista ul e icono de boton hamb

const menu = document.querySelector("ul");

const boton_hamburguesa = document.querySelector(".hamburguesa");

//agregue el evento click para que cuando cuando suceda si el menu(ul) incluye no incluye la clase active que la incluya y  sino que la remueva

boton_hamburguesa.addEventListener("click", ()=> {
    if(!menu.className.includes("active")){
        menu.classList.add("active");
    } else{
        menu.classList.remove("active");
    }
});
