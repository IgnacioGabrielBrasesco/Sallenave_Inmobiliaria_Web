const destacadas = [
    {
        id: 0,
    imagen: ["./img/Casas/CasaCentroRios/CasaCentroCuatroHab1.jpg","./img/Casas/CasaCentroRios/CasaCentroCuatroHab2.jpg",
    "./img/Casas/CasaCentroRios/CasaCentroCuatroHab3.jpg", "./img/Casas/CasaCentroRios/CasaCentroCuatroHab4.jpg", 
    "./img/Casas/CasaCentroRios/CasaCentroCuatroHab5.jpg", "./img/Casas/CasaCentroRios/CasaCentroCuatroHab6.jpg",
    "./img/Casas/CasaCentroRios/CasaCentroCuatroHab7.jpg", "./img/Casas/CasaCentroRios/CasaCentroCuatroHab8.jpg",
    "./img/Casas/CasaCentroRios/CasaCentroCuatroHab9.jpg", "./img/Casas/CasaCentroRios/CasaCentroCuatroHab10.jpg"],
    nombre: "Casa: 4 habitaciones",
    ubicacion: "Paraná, Zona Centro",
    precio: "330.000",
    caracteristica: "Pileta - Fondo - Cocina - Living - Comedor - Oficina - 3 Baños - terraza - Cochera...",
    carousel: "carouselExampleIndicators0",
    categoria: "casas",
    destacado: "Destaca por su excelente ubicación y su gran confort",
    },    


    {
        id: 1,
      imagen: ["./img/Terrenos/TerrazasAlSur/TerrazasAlSur1.jpg","./img/Terrenos/TerrazasAlSur/TerrazasAlSur2.jpg",
      "./img/Terrenos/TerrazasAlSur/TerrazasAlSur3.jpg", "./img/Terrenos/TerrazasAlSur/TerrazasAlSur4.jpg", 
      "./img/Terrenos/TerrazasAlSur/TerrazasAlSur5.jpg", "./img/Terrenos/TerrazasAlSur/TerrazasAlSur6.jpg", 
      "./img/Terrenos/TerrazasAlSur/TerrazasAlSur7.jpg", "./img/Terrenos/TerrazasAlSur/TerrazasAlSur8.jpg", 
      "./img/Terrenos/TerrazasAlSur/TerrazasAlSur1.jpg", "./img/Terrenos/TerrazasAlSur/TerrazasAlSur2.jpg", 
      "./img/Terrenos/TerrazasAlSur/TerrazasAlSur11.jpg"], 
      
      nombre: "Loteo Terrazas Al Sur 333m²",
      ubicacion: "Oro Verde, Triangular",
      precio: "11.500",
      caracteristica: "Asfalto - Cloaca - Luz - Agua...",
      carousel: "carouselExampleIndicators20",
      categoria: "loteos",
      destacado: "Loteo que destaca por su ubicación estrategica y su bajo costo",
      },

      {
        id: 2,
      imagen: ["./img/Departamentos/DeptoAvUranga/DeptoAvUranga1.jpg","./img/Departamentos/DeptoAvUranga/DeptoAvUranga2.jpg",
      "./img/Departamentos/DeptoAvUranga/DeptoAvUranga3.jpg", "./img/Departamentos/DeptoAvUranga/DeptoAvUranga4.jpg", 
      "./img/Departamentos/DeptoAvUranga/DeptoAvUranga5.jpg", "./img/Departamentos/DeptoAvUranga/DeptoAvUranga6.jpg", 
      "./img/Departamentos/DeptoAvUranga/DeptoAvUranga7.jpg", "./img/Departamentos/DeptoAvUranga/DeptoAvUranga4.jpg", 
      "./img/Departamentos/DeptoAvUranga/DeptoAvUranga5.jpg", "./img/Departamentos/DeptoAvUranga/DeptoAvUranga6.jpg", 
      "./img/Departamentos/DeptoAvUranga/DeptoAvUranga11.jpg"], 
      
      nombre: "Departamento: 2 habitaciones",
      ubicacion: "Paraná, Av. Uranga",
      precio: "54.000",
      caracteristica: "Modernizado - Con balcón - Baño - living-cocina-comedor - barra desayunadora...",
      carousel: "carouselExampleIndicators11",
      categoria: "departamentos",
      destacado: "Destaca por su elegante estilo moderno y su accesible precio",
      },

];

const contenedorCardsDestacadas = document.querySelector(".contenedorCardsDestacadas");

// mapeo array propiedades e inserto cards en html
function getProp(destacadas){
  contenedorCardsDestacadas.innerHTML = "";
  
destacadas.map((destacada) => {
    contenedorCardsDestacadas.innerHTML +=`
    <div class="card tarj backgroundGrRosado" id="${destacadas.id}">
          <div id="${destacada.carousel}" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="7"
                aria-label="Slide 8"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="8"
                aria-label="Slide 9"
              ></button>
              <button
                type="button"
                data-bs-target="#${destacada.carousel}"
                data-bs-slide-to="9"
                aria-label="Slide 10"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="${destacada.imagen[0]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[1]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[2]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[3]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[4]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[5]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[6]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[7]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[8]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${destacada.imagen[9]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#${destacada.carousel}"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#${destacada.carousel}"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="card-body">
            <h5 class="card-title"><strong>${destacada.nombre}</strong></h5>
            <h6 class="card-title">${destacada.ubicacion}</h6>
            <h4 class="card-title" style="color: green">
              <strong>USD ${destacada.precio}</strong>
            </h4>
            
            <p class="card-text">
            ${destacada.destacado}
            </p>
            <a href="../pages/detalles.html?id=${destacada.id}" class="btn btn-success">ampliar info</a>
          </div>
        </div>
        `;
});

}

getProp(destacadas);