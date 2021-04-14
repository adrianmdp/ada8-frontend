// Estructura de una función regular

// function nombre(params1, param2, paramN) {
//     Implementación
// }

/**
 * Funcion regular
 */
function mostrarFecha() {
  console.log(new Date());
}

mostrarFecha();

/**
 * Funcion regular con parámetros.
 */
function mostrarEnConsola(param1, param2, param3) {
  console.log(`Mi nombre es ${param1}, soy ${param2}, vivo en ${param3}`);
}

let nombre = prompt("Ingrese su nombre");

mostrarEnConsola(nombre, "programador", "Argentina");

let valor = 123;

console.log(valor * 3);

// Acá continué con mi código hasta que la volví a necesitar

mostrarEnConsola("Doctor", "Uruguay");

console.log("-----------------------------------------------------------");

function suma(valor1, valor2) {
  console.log(valor1 + valor2);
}

suma(3, 9);

console.log("-----------------------------------------------------------");

/**
 * Funcion anónica autoinvocada
 */
(function () {
  console.log("Esta es una función anónima");
})();

/**
 * Asignación de unciones a variables
 */

// Tenemos una funcion anónima que se esta asignando a una variable.
// Para invocar a esta funcion, llamo a la variable con parenstesis.
let productoVar = function (valor1, valor2, valor3) {
  console.log(valor1 * valor3 * valor2);
};

productoVar(3, 6, 5);

/**
 * Funciones de flecha (arrow functions)
 */
const myArrowFunction = (valor3, valor1, valor2) => {
  console.log(valor1 * valor2 * valor3);
};

myArrowFunction(2, 3, 4);

/**
 * Retorno de valores
 */

console.log(
  "---------------------Retorno de valores--------------------------------------"
);

// const saludar = (nombre) => {
//   console.log(`Hola ${nombre}!!!`);
// };

// saludar("Adrián");

const sumar = (valor1, valor2) => {
  const rta = valor1 + valor2;
  return rta;
};

const resultado = sumar(4.4, 6.1);

console.log(resultado);


const obtenerNombreCompleto = (nombre, apellido) => {
  const rta = `${nombre} ${apellido}`;
  return rta;
}

const saludar = (nombre) => {
  const rta = `Hola ${nombre}, un gusto en conocerte`;
  return rta;
}

const gritar = (grito) => {
  return `¡${grito}!`;
}

const saludarGritando1 = (nombre, apellido) => {

  const nomApe = obtenerNombreCompleto(nombre, apellido);

  const saludo = saludar(nomApe);

  const grito = gritar(saludo);

  return grito;

}

const saludarGritando2 = (nombre, apellido) => {

  return gritar(saludar(obtenerNombreCompleto(nombre, apellido)));

}

const saludoGritando1 = saludarGritando1("Adrian", "Solimano");
const saludoGritando2 = saludarGritando2("Matias", "Ada");

console.log(saludoGritando1);
console.log(saludoGritando2);

// ¡Hola Ada Lovelace, un gusto conocerte!
