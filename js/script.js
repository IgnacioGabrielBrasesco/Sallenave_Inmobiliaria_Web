const menu = document.querySelector("ul");

const boton_hamburguesa = document.querySelector(".hamburguesa");

boton_hamburguesa.addEventListener("click", ()=> {
    if(!menu.className.includes("active")){
        menu.classList.add("active");
    } else{
        menu.classList.remove("active");
    }
});


const input = document.querySelector(".buscador")

input.addEventListener("keyup", (event) => {
    const value = event.target.value.toLowerCase();

    const cards = document.querySelectorAll(".card");
    
    cards.forEach((card) => {
        if((card.querySelector(".card-title").textContent.toLowerCase().includes(value))){
            card.style.display = "block";   
        } else{
            card.style.display = "none";            
        };
    });
}); 
