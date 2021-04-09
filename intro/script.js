// Let : Permite cambiar el valor. Puede declararse sin asingarle uno inicial.

let numero;

console.log(numero);

numero = 234;

console.log(numero);

// Const : NO! Permite cambiar el valor. NO! Puede declararse sin asingarle uno inicial.

const stringConstante = "Hola mundo";

console.log(numero);

// stringConstante = "Chau!!!" // Esto da error xq una constante no puede cambiar

// Primitivos
// Strings
let myString = "Soy un string";
let myString2 = "";
let myString3 = "Yo tambien soy un string";
let myString4 = `5`; // Esto es template string (esto es moderno).

// Numbers
let myNumber = 5;
let myNumber2 = 1232332.33444;

// Boolean
let myBoolean = true;
let myBoolean2 = false;

// Operadores + - * / %

// Concatenación (con el signo +)
console.log(myString + " " + myNumber * myNumber2 + " Otro string acá");

// /*console.log(numero + 5);

// numero = 20;

// console.log(numero); */

// let palabra = "Hola mundo!!";
// // let palabra2 = "5";

// // console.log(numero + palabra);
// // console.log(6 + numero + palabra2);

// let variable1;

// console.log(variable1);

// variable1 = true;

// console.log(variable1);

// let variable2 = null;

// console.log(variable2);

// console.log(typeof variable1);
// console.log(typeof palabra);

// let variable3 = 37;

// console.log("Tengo " + variable3 + " años");

// // si hoy es 13 de Abril
// variable3 = variable3 + 1;

// console.log(palabra + " " + 4);

// console.log('Hola, mi nombre es "Adrián"');

// console.log("Hi, I'm Adrián");

// console.log("Hi, I'm " + '"Adrián"');

// console.log('Hi, I\'m "Adrián"');

// console.log("Quiero mostrar una barra invertida como esta \\");

// console.log("Tengo " + variable3 + " años");

// console.log(`Hola, mi nombre es "Adrián"`);

// console.log(`Tengo ${variable3} años`);

alert("Hola, soy un alert");

const dato = prompt("Ingresá un número");
const dato2 = prompt("Ingresá otro número");

console.log(parseInt(dato) + parseInt(dato2));

confirm("La suma de los numeros es: " + (parseInt(dato) + parseInt(dato2)));
