function mostrarFecha() {
  console.log(new Date());
}

mostrarFecha();

function mostrarEnConsola(param1, param2, param3) {
  console.log(`Mi nombre es ${param1}, soy ${param2}, vivo en ${param3}`);
}

// Acá fui escribiendo mi codigo hasta que necesité mi funcion

mostrarEnConsola("Adrián", "programador", "Argentina");

let valor = 123;

console.log(valor * 3);

// Acá continué con mi código hasta que la volví a necesitar

mostrarEnConsola("Matías", "Doctor", "Uruguay");

console.log("-----------------------------------------------------------");

function suma(valor1, valor2) {
  console.log(valor1 + valor2);
}

suma(3, 9);

// Estructura de una función

// function nombre(params1, param2, paramN) {
//     Implementación
// }

console.log("-----------------------------------------------------------");

(function () {
  console.log("Esta es una función anónima");
})();

// Tenemos una funcion anónima que se esta asignando a una variable.
// Para invocar a esta funcion, llamo a la variable con parenstesis.
let productoVar = function (valor1, valor2, valor3) {
  console.log(valor1 * valor3 * valor2);
};

productoVar(3, 6, 5);

function productoFx(valor3, valor1, valor2) {
  console.log(valor1 * valor2 * valor3);
}

productoFx(3, 6, 5);

// Arrow functions
const myArrowFunction = (valor3, valor1, valor2) => {
  console.log(valor1 * valor2 * valor3);
};

myArrowFunction(2, 3, 4);
