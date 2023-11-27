//Buscador:
const input = document.querySelector(".buscador")

input.addEventListener("keyup", (event) => {
    const value = event.target.value.toLowerCase();

    const cards = document.querySelectorAll(".card");
    
    // cards.forEach((card) => {
    //     if((card.querySelector(".card-title").textContent.toLowerCase().includes(value))){
    //         card.style.display = "block";   
    //     } else{
    //         card.style.display = "none";            
    //     };
    // });
getProp(propiedades.filter((propiedad) => propiedad.nombre.toLowerCase().includes(value))
  );

  if(contenedorCardsVentas.children.length === 0){
    contenedorCardsVentas.innerHTML=
    `
    <p>No se encontraron resultados, prueba con otro nombre</p>
    `
  }

}); 

//Array con todos los datos de todas las propiedades 
const propiedades = [
    {
        id: 0,
    imagen: ["../img/Casas/CasaCentroRios/CasaCentroCuatroHab1.jpg","../img/Casas/CasaCentroRios/CasaCentroCuatroHab2.jpg",
    "../img/Casas/CasaCentroRios/CasaCentroCuatroHab3.jpg", "../img/Casas/CasaCentroRios/CasaCentroCuatroHab4.jpg", 
    "../img/Casas/CasaCentroRios/CasaCentroCuatroHab5.jpg", "../img/Casas/CasaCentroRios/CasaCentroCuatroHab6.jpg",
    "../img/Casas/CasaCentroRios/CasaCentroCuatroHab7.jpg", "../img/Casas/CasaCentroRios/CasaCentroCuatroHab8.jpg",
    "../img/Casas/CasaCentroRios/CasaCentroCuatroHab9.jpg", "../img/Casas/CasaCentroRios/CasaCentroCuatroHab10.jpg"],
    nombre: "Casa: 4 habitaciones",
    ubicacion: "Paraná, Zona Centro",
    precio: "330.000",
    caracteristica: "Pileta - Fondo - Cocina - Living - Comedor - Oficina - 3 Baños - terraza - Cochera...",
    carousel: "carouselExampleIndicators0",
    categoria: "casas",
    },

    {
        id: 1,
    imagen: ["../img/Casas/CasaCatamarca/CasaCatamarca1.jpg","../img/Casas/CasaCatamarca/CasaCatamarca2.jpg",
    "../img/Casas/CasaCatamarca/CasaCatamarca3.jpg", "../img/Casas/CasaCatamarca/CasaCatamarca4.jpg",
    "../img/Casas/CasaCatamarca/CasaCatamarca5.jpg", "../img/Casas/CasaCatamarca/CasaCatamarca6.jpg",
    "../img/Casas/CasaCatamarca/CasaCatamarca7.jpg", "../img/Casas/CasaCatamarca/CasaCatamarca2.jpg",
    "../img/Casas/CasaCatamarca/CasaCatamarca3.jpg", "../img/Casas/CasaCatamarca/CasaCatamarca5.jpg"],
    nombre: "Casa: 5 habitaciones",
    ubicacion: "Paraná, Zona Parque Urquiza",
    precio: "205.000",
    caracteristica: "Living comedor - Cocina comedor - Garage - 3 Baños - Lavadero - Fondo - Quincho - Churrasquera...",
    carousel: "carouselExampleIndicators1",
    categoria: "casas",
    },

    {
        id: 2,
    imagen: ["../img/Casas/CasaParque/CasaCincoHabParque1.jpg","../img/Casas/CasaParque/CasaCincoHabParque2.jpg",
    "../img/Casas/CasaParque/CasaCincoHabParque3.jpg", "../img/Casas/CasaParque/CasaCincoHabParque4.jpg", 
    "../img/Casas/CasaParque/CasaCincoHabParque5.jpg", "../img/Casas/CasaParque/CasaCincoHabParque6.jpg", 
    "../img/Casas/CasaParque/CasaCincoHabParque7.jpg", "../img/Casas/CasaParque/CasaCincoHabParque8.jpg", 
    "../img/Casas/CasaParque/CasaCincoHabParque9.jpg", "../img/Casas/CasaParque/CasaCincoHabParque10.jpg", 
    "../img/Casas/CasaParque/CasaCincoHabParque11.jpg"],

    nombre: "Casa: 5 habitaciones",
    ubicacion: "Paraná, Zona Parque Urquiza",
    precio: "120.000",
    caracteristica: "2 baños - Living-comedor - cocina-comedor - Sala de escritorio - Lavadero - Depósito - Fondo...",
    carousel: "carouselExampleIndicators2",
    categoria: "casas",
    },

    {
      id: 3,
  imagen: ["../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing1.jpg","../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing2.jpg",
  "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing3.jpg", "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing4.jpg", 
  "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing1.jpg", "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing2.jpg", 
  "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing3.jpg", "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing4.jpg", 
  "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing1.jpg", "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing2.jpg", 
  "../img/Casas/CasaLJordanyDarwin/CasaLJordanYDarwing3.jpg"],

  nombre: "Casa: 3 habitaciones",
  ubicacion: "Paraná, Zona L. Jordán y Darwin",
  precio: "120.000",
  caracteristica: "2 baños - Living-comedor - cocina abierta - Fondo con churrasquera y quincho abierto...",
  carousel: "carouselExampleIndicators3",
  categoria: "casas",
  },

  {
    id: 4,
imagen: ["../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito1.jpg","../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito2.jpg",
"../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito3.jpg", "../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito4.jpg", 
"../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito5.jpg", "../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito6.jpg", 
"../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito7.jpg", "../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito8.jpg", 
"../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito9.jpg", "../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito10.jpg", 
"../img/Casas/CasaSolvenciaSanBenito/CasaTresDormSanBenito11.jpg"],

nombre: "Casa: 3 habitaciones",
ubicacion: "San Benito, Barrio Solvencia",
precio: "90.000",
caracteristica: "Cochera - Lavadero - 2 baños - Cocina - amplio living-comedor - luz y agua - Escritura al día...",
carousel: "carouselExampleIndicators4",
categoria: "casas",
},

{
  id: 5,
imagen: ["../img/Casas/CasaFeliciano/CasaFeliciano1.jpg","../img/Casas/CasaFeliciano/CasaFeliciano2.jpg",
"../img/Casas/CasaFeliciano/CasaFeliciano3.jpg", "../img/Casas/CasaFeliciano/CasaFeliciano4.jpg", 
"../img/Casas/CasaFeliciano/CasaFeliciano5.jpg", "../img/Casas/CasaFeliciano/CasaFeliciano6.jpg", 
"../img/Casas/CasaFeliciano/CasaFeliciano7.jpg", "../img/Casas/CasaFeliciano/CasaFeliciano8.jpg", 
"../img/Casas/CasaFeliciano/CasaFeliciano9.jpg", "../img/Casas/CasaFeliciano/CasaFeliciano9.jpg", 
"../img/Casas/CasaFeliciano/CasaFeliciano11.jpg"],

nombre: "Casa: 3 habitaciones",
ubicacion: "Paraná, Zona Feliciano y Racedo",
precio: "85.000",
caracteristica: "Dos baños - Cocina separada - Living-comedor - Patio grande - Cochera...",
carousel: "carouselExampleIndicators5",
categoria: "casas",
},

{
  id: 6,
imagen: ["../img/Casas/casaBelgrano/CasaBelgrano1.jpg","../img/Casas/casaBelgrano/CasaBelgrano2.jpg",
"../img/Casas/casaBelgrano/CasaBelgrano3.jpg", "../img/Casas/casaBelgrano/CasaBelgrano4.jpg", 
"../img/Casas/casaBelgrano/CasaBelgrano5.jpg", "../img/Casas/casaBelgrano/CasaBelgrano6.jpg", 
"../img/Casas/casaBelgrano/CasaBelgrano7.jpg", "../img/Casas/casaBelgrano/CasaBelgrano8.jpg", 
"../img/Casas/casaBelgrano/CasaBelgrano9.jpg", "../img/Casas/casaBelgrano/CasaBelgrano9.jpg", 
"../img/Casas/casaBelgrano/CasaBelgrano11.jpg"],

nombre: "Casa: 3 habitaciones",
ubicacion: "Paraná, Esquina Belgrano y Carbo",
precio: "75.000",
caracteristica: "Un baño - Amplia cocina comedor - Living - Sotano - Lavadero - Patio con churrasquera...",
carousel: "carouselExampleIndicators6",
categoria: "casas",
},

{
  id: 7,
imagen: ["../img/Casas/Duplex1/DuplexDosHabitaciones1.svg","../img/Casas/Duplex1/DuplexDosHabitaciones2.svg",
"../img/Casas/Duplex1/DuplexDosHabitaciones3.svg", "../img/Casas/Duplex1/DuplexDosHabitaciones4.svg", 
"../img/Casas/Duplex1/DuplexDosHabitaciones5.svg", "../img/Casas/Duplex1/DuplexDosHabitaciones6.svg", 
"../img/Casas/Duplex1/DuplexDosHabitaciones7.svg", "../img/Casas/Duplex1/DuplexDosHabitaciones8.svg", 
"../img/Casas/Duplex1/DuplexDosHabitaciones9.svg", "../img/Casas/Duplex1/DuplexDosHabitaciones10.svg", 
"../img/Casas/Duplex1/DuplexDosHabitaciones11.svg"],

nombre: "Casa: 2 habitaciones",
ubicacion: "Paraná, Zona J. Newbery y Garrigó",
precio: "45.000",
caracteristica: "Dos baños - Cocina separada - Living-comedor - Patio delantero - Cochera - Churrasquera...",
carousel: "carouselExampleIndicators7",
categoria: "casas",
},

{
  id: 8,
imagen: ["../img/Casas/CasaParacao/CasaDosDormParacao1.jpg","../img/Casas/CasaParacao/CasaDosDormParacao2.jpg",
"../img/Casas/CasaParacao/CasaDosDormParacao3.jpg", "../img/Casas/CasaParacao/CasaDosDormParacao4.jpg", 
"../img/Casas/CasaParacao/CasaDosDormParacao5.jpg", "../img/Casas/CasaParacao/CasaDosDormParacao6.jpg", 
"../img/Casas/CasaParacao/CasaDosDormParacao7.jpg", "../img/Casas/CasaParacao/CasaDosDormParacao1.jpg", 
"../img/Casas/CasaParacao/CasaDosDormParacao2.jpg", "../img/Casas/CasaParacao/CasaDosDormParacao3.jpg", 
"../img/Casas/CasaParacao/CasaDosDormParacao11.jpg"], 

nombre: "Casa: 2 habitaciones",
ubicacion: "Paraná, Zona Club Paracao",
precio: "32.000",
caracteristica: "Cocina-Living-comedor - 1 baño - Amplio fondo - Cochera pasante para 2 o más autos...",
carousel: "carouselExampleIndicators8",
categoria: "casas",
},

{
  id: 9,
imagen: ["../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas1.jpg","../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas2.jpg",
"../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas3.jpg", "../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas4.jpg", 
"../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas5.jpg", "../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas1.jpg", 
"../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas2.jpg", "../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas3.jpg", 
"../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas4.jpg", "../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas5.jpg", 
"../img/Galpones/GalponCincoEsquinas/GalponCincoEsquinas11.jpg"], 

nombre: "Galpon / Local comercial",
ubicacion: "Paraná, Zona Cinco Esquinas",
precio: "310.000",
caracteristica: "Luz - Gas - Agua - Baño - Cocina - Patio - Amplias dimensiones...",
carousel: "carouselExampleIndicators9",
categoria: "galpones",
},

{
  id: 10,
imagen: ["../img/Departamentos/DeptoLaprida/DeptoLaprida1.jpg","../img/Departamentos/DeptoLaprida/DeptoLaprida2.jpg",
"../img/Departamentos/DeptoLaprida/DeptoLaprida3.jpg", "../img/Departamentos/DeptoLaprida/DeptoLaprida4.jpg", 
"../img/Departamentos/DeptoLaprida/DeptoLaprida5.jpg", "../img/Departamentos/DeptoLaprida/DeptoLaprida6.jpg", 
"../img/Departamentos/DeptoLaprida/DeptoLaprida2.jpg", "../img/Departamentos/DeptoLaprida/DeptoLaprida3.jpg", 
"../img/Departamentos/DeptoLaprida/DeptoLaprida4.jpg", "../img/Departamentos/DeptoLaprida/DeptoLaprida5.jpg", 
"../img/Departamentos/DeptoLaprida/DeptoLaprida11.jpg"], 

nombre: "Departamento: 3 habitaciones",
ubicacion: "Paraná, Laprida y Santiago del Est.",
precio: "55.000",
caracteristica: "2 Baño - cocina sectorizada con barra desayunadora - living-comedor...",
carousel: "carouselExampleIndicators10",
categoria: "departamentos",
},

{
  id: 11,
imagen: ["../img/Departamentos/DeptoAvUranga/DeptoAvUranga1.jpg","../img/Departamentos/DeptoAvUranga/DeptoAvUranga2.jpg",
"../img/Departamentos/DeptoAvUranga/DeptoAvUranga3.jpg", "../img/Departamentos/DeptoAvUranga/DeptoAvUranga4.jpg", 
"../img/Departamentos/DeptoAvUranga/DeptoAvUranga5.jpg", "../img/Departamentos/DeptoAvUranga/DeptoAvUranga6.jpg", 
"../img/Departamentos/DeptoAvUranga/DeptoAvUranga7.jpg", "../img/Departamentos/DeptoAvUranga/DeptoAvUranga4.jpg", 
"../img/Departamentos/DeptoAvUranga/DeptoAvUranga5.jpg", "../img/Departamentos/DeptoAvUranga/DeptoAvUranga6.jpg", 
"../img/Departamentos/DeptoAvUranga/DeptoAvUranga11.jpg"], 

nombre: "Departamento: 2 habitaciones",
ubicacion: "Paraná, Av. Uranga",
precio: "54.000",
caracteristica: "Modernizado - Con balcón - Baño - living-cocina-comedor - barra desayunadora...",
carousel: "carouselExampleIndicators11",
categoria: "departamentos",
},

{
  id: 12,
imagen: ["../img/Departamentos/DeptoVictoria/DeptoVictoria1.jpg","../img/Departamentos/DeptoVictoria/DeptoVictoria2.jpg",
"../img/Departamentos/DeptoVictoria/DeptoVictoria3.jpg", "../img/Departamentos/DeptoVictoria/DeptoVictoria4.jpg", 
"../img/Departamentos/DeptoVictoria/DeptoVictoria5.jpg", "../img/Departamentos/DeptoVictoria/DeptoVictoria6.jpg", 
"../img/Departamentos/DeptoVictoria/DeptoVictoria1.jpg", "../img/Departamentos/DeptoVictoria/DeptoVictoria2.jpg", 
"../img/Departamentos/DeptoVictoria/DeptoVictoria3.jpg", "../img/Departamentos/DeptoVictoria/DeptoVictoria4.jpg", 
"../img/Departamentos/DeptoVictoria/DeptoVictoria11.jpg"], 

nombre: "Departamento: 1 habitaciones",
ubicacion: "Paraná, Victoria y Corrientes",
precio: "43.000",
caracteristica: "Baño - habitación con placard - amplio living-cocina-comedor - ascensor...",
carousel: "carouselExampleIndicators12",
categoria: "departamentos",
},

{
  id: 13,
imagen: ["../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen1.jpg","../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen2.jpg",
"../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen3.jpg", "../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen1.jpg", 
"../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen2.jpg", "../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen3.jpg", 
"../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen1.jpg", "../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen2.jpg", 
"../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen3.jpg", "../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen1.jpg", 
"../img/Departamentos/DeptoHipolitoYrigoyen/DeptoHipolitoYrigoyen11.jpg"], 

nombre: "Departamento: 1 habitaciones",
ubicacion: "Paraná, Calle Hipolito Yrigoyen",
precio: "40.000",
caracteristica: "Balcón en piso 11 - living-cocina-comedor...",
carousel: "carouselExampleIndicators13",
categoria: "departamentos",
},

{
  id: 14,
imagen: ["../img/Terrenos/TerrenoCentro/TerrenoCentro1.jpg","../img/Terrenos/TerrenoCentro/TerrenoCentro2.jpg",
"../img/Terrenos/TerrenoCentro/TerrenoCentro3.jpg", "../img/Terrenos/TerrenoCentro/TerrenoCentro4.jpg", 
"../img/Terrenos/TerrenoCentro/TerrenoCentro5.jpg", "../img/Terrenos/TerrenoCentro/TerrenoCentro6.jpg", 
"../img/Terrenos/TerrenoCentro/TerrenoCentro1.jpg", "../img/Terrenos/TerrenoCentro/TerrenoCentro2.jpg", 
"../img/Terrenos/TerrenoCentro/TerrenoCentro3.jpg", "../img/Terrenos/TerrenoCentro/TerrenoCentro4.jpg", 
"../img/Terrenos/TerrenoCentro/TerrenoCentro11.jpg"], 

nombre: "Terreno 207m²",
ubicacion: "Paraná, Zona Centro",
precio: "40.000",
caracteristica: "Gas - Asfalto - Cloaca - Luz - Agua...",
carousel: "carouselExampleIndicators14",
categoria: "terrenos",
},

{
  id: 15,
imagen: ["../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara1.jpg","../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara2.jpg",
"../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara3.jpg", "../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara1.jpg", 
"../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara2.jpg", "../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara3.jpg", 
"../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara1.jpg", "../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara2.jpg", 
"../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara3.jpg", "../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara1.jpg", 
"../img/Terrenos/TerrenoZonaClubTilcada/TerrenoZonaClubTilcara11.jpg"], 

nombre: "Terreno 30x40²",
ubicacion: "Zona Club Tilcara. Ruta 18 km 20/5",
precio: "33.000",
caracteristica: "Agua - Piscina - Luz - Construcción...",
carousel: "carouselExampleIndicators15",
categoria: "terrenos",
},

{
  id: 16,
imagen: ["../img/Terrenos/LoteoLasTipas/LoteoLasTipas1.jpg","../img/Terrenos/LoteoLasTipas/LoteoLasTipas2.jpg",
"../img/Terrenos/LoteoLasTipas/LoteoLasTipas3.jpg", "../img/Terrenos/LoteoLasTipas/LoteoLasTipas4.jpg", 
"../img/Terrenos/LoteoLasTipas/LoteoLasTipas1.jpg", "../img/Terrenos/LoteoLasTipas/LoteoLasTipas2.jpg", 
"../img/Terrenos/LoteoLasTipas/LoteoLasTipas3.jpg", "../img/Terrenos/LoteoLasTipas/LoteoLasTipas4.jpg", 
"../img/Terrenos/LoteoLasTipas/LoteoLasTipas1.jpg", "../img/Terrenos/LoteoLasTipas/LoteoLasTipas2.jpg", 
"../img/Terrenos/LoteoLasTipas/LoteoLasTipas11.jpg"], 

nombre: "Loteo Las Tipas 10x30",
ubicacion: "Paraná, Churruarin y Gob. Crespo",
precio: "22.000",
caracteristica: "Gas - Asfalto - Cloaca - Luz - Agua...",
carousel: "carouselExampleIndicators16",
categoria: "loteos",
},

{
  id: 17,
imagen: ["../img/Terrenos/LoteoLebensonh/LoteoLebensonh1.jpg","../img/Terrenos/LoteoLebensonh/LoteoLebensonh2.jpg",
"../img/Terrenos/LoteoLebensonh/LoteoLebensonh3.jpg", "../img/Terrenos/LoteoLebensonh/LoteoLebensonh4.jpg", 
"../img/Terrenos/LoteoLebensonh/LoteoLebensonh1.jpg", "../img/Terrenos/LoteoLebensonh/LoteoLebensonh2.jpg", 
"../img/Terrenos/LoteoLebensonh/LoteoLebensonh3.jpg", "../img/Terrenos/LoteoLebensonh/LoteoLebensonh4.jpg", 
"../img/Terrenos/LoteoLebensonh/LoteoLebensonh1.jpg", "../img/Terrenos/LoteoLebensonh/LoteoLebensonh2.jpg", 
"../img/Terrenos/LoteoLebensonh/LoteoLebensonh11.jpg"], 

nombre: "Loteo Lebensonh 10x32",
ubicacion: "Paraná, Lebensonh",
precio: "20.000",
caracteristica: "Asfalto - Cloaca - Luz - Agua...",
carousel: "carouselExampleIndicators17",
categoria: "loteos",
},

{
  id: 18,
imagen: ["../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo1.jpg","../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo2.jpg",
"../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo3.jpg", "../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo4.jpg", 
"../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo5.jpg", "../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo6.jpg", 
"../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo7.jpg", "../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo8.jpg", 
"../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo1.jpg", "../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo2.jpg", 
"../img/Terrenos/JardinDelHipodromo/JardinDelHipodromo11.jpg"], 

nombre: "Loteo Jardín Del Hipodromo 625m²",
ubicacion: "Oro Verde",
precio: "18.000",
caracteristica: "Asfalto - Cloaca - Luz - Agua...",
carousel: "carouselExampleIndicators18",
categoria: "loteos",
},

{
  id: 19,
imagen: ["../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos1.jpg","../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos2.jpg",
"../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos3.jpg", "../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos4.jpg", 
"../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos1.jpg", "../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos2.jpg", 
"../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos3.jpg", "../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos4.jpg", 
"../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos1.jpg", "../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos2.jpg", 
"../img/Terrenos/LoteoLosLapachos/LoteoLosLapachos11.jpg"], 

nombre: "Loteo Los Lapachos 10x30",
ubicacion: "Paraná, Lebensonh",
precio: "17.000",
caracteristica: "Asfalto - Agua - Luz - Parquizado...",
carousel: "carouselExampleIndicators19",
categoria: "loteos",
},

{
  id: 20,
imagen: ["../img/Terrenos/TerrazasAlSur/TerrazasAlSur1.jpg","../img/Terrenos/TerrazasAlSur/TerrazasAlSur2.jpg",
"../img/Terrenos/TerrazasAlSur/TerrazasAlSur3.jpg", "../img/Terrenos/TerrazasAlSur/TerrazasAlSur4.jpg", 
"../img/Terrenos/TerrazasAlSur/TerrazasAlSur5.jpg", "../img/Terrenos/TerrazasAlSur/TerrazasAlSur6.jpg", 
"../img/Terrenos/TerrazasAlSur/TerrazasAlSur7.jpg", "../img/Terrenos/TerrazasAlSur/TerrazasAlSur8.jpg", 
"../img/Terrenos/TerrazasAlSur/TerrazasAlSur1.jpg", "../img/Terrenos/TerrazasAlSur/TerrazasAlSur2.jpg", 
"../img/Terrenos/TerrazasAlSur/TerrazasAlSur11.jpg"], 

nombre: "Loteo Terrazas Al Sur 333m²",
ubicacion: "Oro Verde, Triangular",
precio: "11.500",
caracteristica: "Asfalto - Cloaca - Luz - Agua...",
carousel: "carouselExampleIndicators20",
categoria: "loteos",
},

{
  id: 21,
imagen: ["../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull1.jpg","../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull2.jpg",
"../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull3.jpg", "../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull4.jpg", 
"../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull1.jpg", "../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull2.jpg", 
"../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull3.jpg", "../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull4.jpg", 
"../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull1.jpg", "../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull2.jpg", 
"../img/Terrenos/UnTerrenoSauceMontrull/UnTerrenoSauceMontrull11.jpg"], 

nombre: "Terreno 421m²",
ubicacion: "Sauce Montrull",
precio: "11.500",
caracteristica: "Asfalto - Agua - Luz - Parquizado...",
carousel: "carouselExampleIndicators21",
categoria: "terrenos",
},

{
  id: 22,
imagen: ["../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul1.jpg","../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul2.jpg",
"../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul3.jpg", "../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul4.jpg", 
"../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul5.jpg", "../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul6.jpg", 
"../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul7.jpg", "../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul1.jpg", 
"../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul2.jpg", "../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul3.jpg", 
"../img/Terrenos/TresTerrenosSauceMontrull/TresTerrenosSauceMontrul11.jpg"], 

nombre: "Terrenos 315m²",
ubicacion: "Sauce Montrull",
precio: "10.000",
caracteristica: "Asfalto - Agua - Luz - Parquizado...",
carousel: "carouselExampleIndicators22",
categoria: "terrenos",
},

{
  id: 23,
imagen: ["../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito1.jpg","../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito2.jpg",
"../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito3.jpg", "../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito1.jpg", 
"../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito2.jpg", "../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito3.jpg", 
"../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito1.jpg", "../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito2.jpg", 
"../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito3.jpg", "../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito2.jpg", 
"../img/Terrenos/TerrenoSanBenito/TerrenoSanBenito11.jpg"], 

nombre: "Terrenos 300m²²",
ubicacion: "San Benito",
precio: "5.800",
caracteristica: "Mensurado - Luz - Agua...",
carousel: "carouselExampleIndicators23",
categoria: "terrenos",
},

];

// selecciono el contenedor de html donde voy a insertar las cards de propiedades
const contenedorCardsVentas = document.querySelector(".contenedorCardsVentas");

// mapeo array propiedades e inserto cards en html
function getProp(propiedades){
  contenedorCardsVentas.innerHTML = "";
  
propiedades.map((propiedad) => {
    contenedorCardsVentas.innerHTML +=`
    <div class="card tarj" id="${propiedades.id}">
          <div id="${propiedad.carousel}" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="6"
                aria-label="Slide 7"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="7"
                aria-label="Slide 8"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="8"
                aria-label="Slide 9"
              ></button>
              <button
                type="button"
                data-bs-target="#${propiedad.carousel}"
                data-bs-slide-to="9"
                aria-label="Slide 10"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="${propiedad.imagen[0]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[1]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[2]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[3]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[4]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[5]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[6]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[7]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[8]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="${propiedad.imagen[9]}"
                  class="d-block w-100 imgCasas"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#${propiedad.carousel}"
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
              data-bs-target="#${propiedad.carousel}"
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
            <h5 class="card-title"><strong>${propiedad.nombre}</strong></h5>
            <h6 class="card-title">${propiedad.ubicacion}</h6>
            <h4 class="card-title" style="color: green">
              <strong>USD ${propiedad.precio}</strong>
            </h4>
            
            <p class="card-text">
            ${propiedad.caracteristica}
            </p>
            <a href="../pages/detalles.html?id=${propiedad.id}" class="btn btn-success">ampliar info</a>
          </div>
        </div>
        `;
});

}

getProp(propiedades);

// Filtros


const filters = document.querySelectorAll(".filter");


filters.forEach((fil) => {
  fil.addEventListener("click", (event) => {

    filters.forEach((filter) => {
      filter.classList.remove("filtroActivo");
    });

    if(!event.target.className.includes("filtroActivo")) {
      fil.classList.add("filtroActivo");
    }

    if(event.target.textContent === "Todos"){
      getProp(propiedades);
    } else {
      getProp(
        propiedades.filter((propiedades) => propiedades.categoria.toLowerCase() === event.target.textContent.toLowerCase())
      );
    }
  });  
});
