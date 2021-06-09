/**
 * Nav Items
 */
// const ul = document.createElement("ul");

// let continuar = "si";

// while (continuar === "si") {
    
//     ruta = prompt("Ingresar el link del item");
//     itemText = prompt("Ingresar item de menú");
//     continuar = prompt("Desea agregar un Item?");
    
//     const li = document.createElement("li");
//     const a = document.createElement("a");
//     const text = document.createTextNode(itemText);

//     a.setAttribute("href", ruta);
//     a.appendChild(text);
//     li.appendChild(a);
//     ul.appendChild(li);
    
// }

/**
 * Nav
 */
// const navPrimary = document.createElement("nav");
// navPrimary.appendChild(ul);

/**
 * Header
 */
// const header = document.createElement("header");

// header.appendChild(navPrimary);

// const parrafo = document.createElement("p");
// const text = document.createTextNode("lorem ipsum");

// parrafo.appendChild(text);

// document.body.appendChild(header);
// document.body.appendChild(parrafo);


/**
 * 
 */
// const imagen = document.createElement("img");
// imagen.setAttribute("src", "assets/img/imagen1.jpg");
// imagen.setAttribute("alt", "Foto de Agos");
// imagen.setAttribute("class", "img-fluid");
// imagen.setAttribute("width", "400");
// imagen.style.border = "2px solid #EEE";

// document.body.appendChild(imagen);


/**
 * Crear cuadrados dinamicos con un color que se pida mediante un prompt.
 * Los cuadrados deben tener un tamaño que tambien se pida mediante prompt.
 */
// const container = document.createElement("div");
// container.style.display = 'flex';
// document.body.appendChild(container);

// container.classList.add("container");

// const generarCuadrado = () => { 

//     const div = document.createElement("div");
//     const p = document.createElement("p");

//     const size = prompt("Ingresar el tamaño");
//     const color = prompt("Ingresar color");
//     const text = prompt("Ingresar letra");
//     const positionLeft = prompt("Ingresar left");
//     const positionTop = prompt("Ingresar top");

//     const textNode = document.createTextNode(text);

//     p.appendChild(textNode);
//     div.setAttribute("style", `width:${size}px; height:${size}px; background-color: ${color}; padding: 20px; position: absolute; left:${positionLeft}px; top: `);
//     div.appendChild(p);
//     container.appendChild(div);
    
// }

// for(let i = 0; i < 3; i++) {

//     generarCuadrado();

// }


/**
 * 
 */
const fruta = document.createElement("span");
const text = document.createTextNode("manzana");
fruta.appendChild(text);

const x = prompt("ingresar valor para x");
const y = prompt("ingresar valor para y");

const celdas = document.getElementsByClassName("cell");

for(celda of celdas) {

    if(celda.getAttribute('data-row') === x && celda.getAttribute('data-col') === y) {
        celda.appendChild(fruta);
    }

}


