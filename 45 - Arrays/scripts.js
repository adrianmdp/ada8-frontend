// const personas1 = ["Adrián", "Matias", "Eze", "Melisa"];
// const personas2 = ["Ludmila", "Mailen", "Valentina", "Agostina"];
// const personas3 = ["Messi", "Mascherano", "Gallardo"];

// const personas = [personas1, personas2, personas3];

// let totalJugadores = 0;

// for(let i = 0; i < personas.length; i++) {

//     for(let j = 0; j < personas[i].length; j++) {

//         totalJugadores = totalJugadores + 1;

//     }

// }

// console.log(totalJugadores);

const equipo1 = ["Adrián", "Matias", "Eze", "Melisa"];
const equipo2 = ["Ludmila", "Mailen", "Valentina", "Agostina"];
const equipo3 = ["Messi", "Mascherano", "Gallardo"];

const equipos = [equipo1, equipo2, equipo3];

console.log(equipo1[1]);
console.log(equipos[0][1]);

let totalJugadores = 0;

// for(const equipo of equipos) {

//     for(const jugador of equipo) {

//         totalJugadores = totalJugadores + 1;

//         console.log(totalJugadores, jugador);

//     }

// }

// console.log(totalJugadores);

// for(equipo of equipos) {

//     totalJugadores = equipo.length + totalJugadores;

//     console.log(equipo);

// }

// console.log(totalJugadores);

/**
 *
 */

// const personas1 = ["Adrián", "Matias", "Eze", "Melisa"];
// const personas2 = ["Ludmila", "Mailen", "Valentina", "Agostina"];
// const personas3 = ["Messi", "Mascherano", ["Aguero", "Diego", "Roman"]];

// const personas = [personas1, personas2, personas3];

// console.log(personas[1][2]);
// console.log(personas[2][2]);
// console.log(personas[0][1]);
// console.log(personas[2][2][1]);

/**
 * pop
 * El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
 * */
// console.log(col1);

// const dato = col1.pop();
// console.log(col1);
// console.log(dato);

// const dato2 = col1.pop();
// console.log(col1);
// console.log(dato2);

/**
 * shift
 * El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud
 */

// console.log(col1);
// const dato = col1.shift();
// console.log(col1);
// console.log(dato);

/**
 * push
 * El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
 */
// console.log(col1);
// const dato = col1.push("Agostina");
// console.log(col1);
// console.log(dato);

/**
 * unshift
 * El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
 */
// console.log(col1);
// const dato = col1.unshift("Agostina");
// console.log(col1);
// console.log(dato);

/**
 * slice
 * El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
 */
// const newArray = col1.slice(0, 10);

// console.log(col1);
// console.log(newArray);

/**
 * splice
 * El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
 */
// console.log(col1);

// col1.splice(2);

// console.log(col1);

/**
 * concat
 * El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
 */
// console.log(col1);
// console.log(col2);
// const newArray = col1.concat(col2);
// console.log(newArray);

/**
 * join
 * El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
 */
// console.log(col1);
// const newString = col1.join("|");
// console.log(newString);
