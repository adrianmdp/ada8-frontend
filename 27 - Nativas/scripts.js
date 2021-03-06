// length
// La propiedad length de un objeto String representa la longitud de una cadena, en unidades de código.
const saludo = "Hola mundo!!!";
const cantidadCaracteres = saludo.length;

console.log(cantidadCaracteres);

// toUpperCase
// El toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
const cadenaEnMayusculas = saludo.toUpperCase();

console.log(cadenaEnMayusculas);

// toLowerCase
// El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.
const cadenaEnMinusculas = saludo.toLowerCase();

console.log(cadenaEnMinusculas);

// slice
// El método slice() extrae una sección de una cadena y devuelve una cadena nueva.
let cadenaParcial = saludo.slice(3, 4);
cadenaParcial = saludo.slice(3, -1);

console.log(cadenaParcial);

// includes
// El método includes() determina si una cadena de texto puede ser encontrada dentro de otra cadena de texto, devolviendo true o false según corresponda.
const existe = saludo.includes("Hol"); // devuelve true
const noExiste = saludo.includes("Hol", 4); // devuelve false

console.log(existe);

// indexOf
// El método indexOf()devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.
const indice = saludo.indexOf("mun");

console.log(indice);

// replace
// El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, siendo cada una de estas coincidencias reemplazadas por remplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función que será llamada para cada coincidencia. Si el patrón es una cadena, sólo la primera coincidencia será reemplazada.
// La cadena original permanecerá inalterada.
let nuevaCadena = saludo.replace("Hola", "Chau");
let nuevaCadena2 = saludo.replaceAll("o", "i");

console.log(nuevaCadena);

// toString
// Devuelve una cadena que representa al objeto Number especificado
const saldo = 2034;
const saldoToString = saldo.toString();

console.log(typeof saldo);
console.log(typeof saldoToString);

// min
// Obtiene el minimo de una serie de números
const minimo = Math.min(3, 6, 1, 45, -3, 34);

console.log(minimo);

// max
// Obtiene el maximo de una serie de números
const maximo = Math.max(3, 6, 1, 45, -3, 34);

console.log(minimo);

// round
// Redondea hacia arriba si el decimal esta por encima de 49 y hacia abajo por debajo de 50.
const redondeo1 = Math.round(3.49);
const redondeo2 = Math.round(3.5);

console.log("round", redondeo1);
console.log("round", redondeo2);

// ceil
// Redondea hacia arriba sin importar el valor del decimal.
const redondeoArriba = Math.ceil(3.00001);
console.log("ceil", redondeoArriba);

// floor
// Redondea hacia abajo sin importar el valor del decimal.
const redondeoAbajo = Math.floor(3.999999);
console.log("floor", redondeoAbajo);

// random
// devuelve un valor aleatorio
console.log(Math.random());

// Resolución ej 6 Funciones nativas.
// 1
const cambioTodasLasVocales1 = saludo.replaceAll(/[aeou]/g, "i");

// 2
const cambioTodasLasVocales2 = saludo.replaceAll("a", "i").replaceAll("e", "i").replaceAll("o", "i").replaceAll("u", "i");

// 3
let cambioTodasLasVocales3 = saludo.replaceAll("a", "i");
cambioTodasLasVocales3 = saludo.replaceAll("e", "i");
cambioTodasLasVocales3 = saludo.replaceAll("o", "i");
cambioTodasLasVocales3 = saludo.replaceAll("u", "i");


// Resolución ej 2 Funciones nativas
const esElUltimoCaracter4 = (palabra, caracter) => {
    return (palabra.slice(-1) === caracter);
}

const ej2_1 = esElUltimoCaracter4('lovelace', 'e');
const ej2_2 = esElUltimoCaracter4('lovelace', 'f');

console.log(ej2_1, ej2_2);


function esElUltimoCaracter1 (palabra, caracter) {
    return(palabra.includes(caracter, palabra.slice(-1)));
} 

const esElUltimoCaracter2 = (palabra, caracter) => { 
    return (palabra.charAt(palabra.length-1) === caracter); 
}

function esElUltimoCaracter3 (palabra, caracter) {
    return (palabra.lastIndexOf(caracter) === palabra.length-1 )
} 


// Uso de Split
const obtenerPrimeraOracion = (texto) => {
    const array = texto.split("/");
    return array[5];
};
  
const rta = obtenerPrimeraOracion("home/adrian/Documentos/ada8/27%20-%20Nativas/index.html");
const rta2 = obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')

console.log(rta);




function esFraccionMayorAUno(fraccion){
    const datos = fraccion.split('/');
    const dato1 = parseInt(datos[0]);
    const dato2 = parseInt(datos[1]);
    return (dato1 / dato2) > 1;
} 

console.log(esFraccionMayorAUno('1/2'));
// false
console.log(esFraccionMayorAUno('2/2'));
// false
console.log(esFraccionMayorAUno('4/2'));
// true