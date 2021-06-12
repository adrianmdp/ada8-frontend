"use strict";

/**
 * Nav Items
 */
// const ul = document.createElement("ul");

// let continuar = "si";

// const itemsMenu = [
// 	["Home", "/"],
// 	["Servicios", "/services"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// 	["Contacto", "/contact"],
// ];

// for (const item of itemsMenu) {
// 	const li = document.createElement("li");
// 	const a = document.createElement("a");
// 	const text = document.createTextNode(item[0]);

// 	a.setAttribute("href", item[1]);
// 	a.appendChild(text);
// 	li.appendChild(a);
// 	ul.appendChild(li);
// }

// while (continuar === "si") {
// 	itemText = prompt("Ingresar texto del item de menú");
// 	ruta = prompt("Ingresar el link del item");

// 	continuar = prompt("Desea agregar un Item más?");

// 	const li = document.createElement("li");
// 	const a = document.createElement("a");
// 	const text = document.createTextNode(itemText);

// 	a.setAttribute("href", ruta);
// 	a.appendChild(text);
// 	li.appendChild(a);
// 	ul.appendChild(li);
// }

// document.body.appendChild(ul);

// /**
//  * Nav
//  */
// const navPrimary = document.createElement("nav");
// navPrimary.appendChild(ul);

// /**
//  * Header
//  */
// const header = document.createElement("header");

// header.appendChild(navPrimary);

// const parrafo = document.createElement("p");
// const text = document.createTextNode("lorem ipsum");

// parrafo.appendChild(text);

// document.body.appendChild(header);
// document.body.appendChild(parrafo);

// /**
//  *
//  */
// const imagen = document.createElement("img");
// imagen.setAttribute("src", "assets/img/imagen1.jpg");
// imagen.setAttribute("alt", "Foto de Agos");
// imagen.setAttribute("class", "img-fluid");
// imagen.setAttribute("width", "400");
// imagen.style.border = "2px solid #EEE";

// document.body.appendChild(imagen);

// /**
//  * Crear cuadrados dinamicos con un color que se pida mediante un prompt.
//  * Los cuadrados deben tener un tamaño que tambien se pida mediante prompt.
//  */
// const container = document.createElement("div");
// container.style.display = "flex";
// document.body.appendChild(container);

// container.classList.add("container");

// const generarCuadrado = () => {
// 	const div = document.createElement("div");
// 	const p = document.createElement("p");

// 	const size = prompt("Ingresar el tamaño");
// 	const color = prompt("Ingresar color");
// 	const text = prompt("Ingresar letra");
// 	const positionLeft = prompt("Ingresar left");
// 	const positionTop = prompt("Ingresar top");

// 	const textNode = document.createTextNode(text);

// 	p.appendChild(textNode);
// 	div.setAttribute(
// 		"style",
// 		`width:${size}px; height:${size}px; background-color: ${color}; padding: 20px; position: absolute; left:${positionLeft}px; top: `
// 	);
// 	div.appendChild(p);
// 	container.appendChild(div);
// };

// for (let i = 0; i < 3; i++) {
// 	generarCuadrado();
// }

// /**
//  *
//  */
// const fruta = document.createElement("span");
// const text = document.createTextNode("manzana");
// fruta.appendChild(text);

// const x = prompt("ingresar valor para x");
// const y = prompt("ingresar valor para y");

// const celdas = document.getElementsByClassName("cell");

// for (celda of celdas) {
// 	if (
// 		celda.getAttribute("data-row") === x &&
// 		celda.getAttribute("data-col") === y
// 	) {
// 		celda.appendChild(fruta);
// 	}
// }

/**
 *
 */
// 1 - Al cargar texto en el input, se guarde en el array.
// 2 - La lista debe actualziarse con la cantidad de items que lea del array
//   - Tiene que borrar todo lo que contenga la lista.
//   - Recorrer el array por cada item.
//   - Insertar un item en la lista.

// Crear formulario
const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");
const textButton = document.createTextNode("Agregar");
form.appendChild(input);
form.appendChild(button);
input.setAttribute("name", "tarea");
input.setAttribute("type", "text");
button.setAttribute("type", "submit");
button.appendChild(textButton);

const ul = document.createElement("ul");
const tasks = ["Ir al gym"];

const agregarTarea = (e) => {
	e.preventDefault();
	tasks.push(e.target.tarea.value);
	actualizarLista();
};

const createItem = (txtNode) => {
	const li = document.createElement("li");
	li.appendChild(txtNode);
	return li;
};

const agregarItemALista = (item) => {
	ul.appendChild(item);
};

const actualizarLista = () => {
	ul.innerHTML = "";

	for (const task of tasks) {
		const text = document.createTextNode(task);
		const li = createItem(text);
		agregarItemALista(li);
	}
};

form.addEventListener("submit", agregarTarea);

button.appendChild(textButton);
document.body.appendChild(form);
document.body.appendChild(ul);
