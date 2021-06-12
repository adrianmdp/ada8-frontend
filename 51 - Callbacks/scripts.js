// const button = document.createElement("button");

// button.addEventListener("click", () => {
// 	console.log("Presioné el botón");
// });

// const agregarItemAlaLista = () => {
// 	console.log("Presioné el botón");
// };

// button.addEventListener("click");

const unaFuncion1 = (string) => {
	console.log(string);
};
const unaFuncion2 = () => {
	console.log("unaFuncion2");
};
const unaFuncion3 = () => {
	console.log("unaFuncion3");
};
const unaFuncion4 = () => {
	console.log("unaFuncion4");
};

const callbackFuncion = (num, string, callback) => {
	callback(string);
};

// callbackFuncion(1, "Hola mundo", unaFuncion1);
// callbackFuncion(1, "string", unaFuncion3);
// callbackFuncion(1, "string", unaFuncion2);
// callbackFuncion(1, "string", unaFuncion4);

const tiempoDelJuego = 0.25;
let min = 0;

const mostrarHolaMundo = () => {
	console.log("tiempo completo");
};

const mostrarSegundos = () => {
	if (min <= 10) {
		console.log(min++);
	} else {
		clearInterval(id);
	}
};

const id = setInterval(mostrarSegundos, 1000);

// setTimeout(mostrarHolaMundo, tiempoDelJuego * 1000 * 60);
