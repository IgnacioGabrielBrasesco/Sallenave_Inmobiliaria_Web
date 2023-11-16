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
            
            // card.style.order = "0";
            
            
            
        } else{
            card.style.display = "none";
            // card.style.order = "1";
        };
    });
}); 



//  const filtros = document.querySelectorAll(".filtros");
//  const cards = document.querySelectorAll(".card");

//  cards.forEach((card) => {
//      card.addEventListener("click", (e) => {
//          if(e.target.matches("button")){
//              const card = e.target.parentElement.parentElement;
//              console.log(card.querySelector("h5").textContent);
//          }
//      })
//  })



