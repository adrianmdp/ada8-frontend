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

const col1 = ["Adrián", "Matias", "Eze", "Melisa"];
const col2 = ["Ludmila", "Mailen", "Valentina", "Agostina"];
const col3 = ["Messi", "Mascherano", "Gallardo"];

const equipos = [col1, col2, col3];

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

/**
 * shift
 * El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la longitud
 */

/**
 * push
 * El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
 */

/**
 * unshift
 * El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
 */

/**
 * slice
 * El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará.
 */

/**
 * splice
 * El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
 */
console.log(col2);

col2.splice(0, 2, "Adrián", "Gallardo", "Riquelme");

console.log(col2);


/**
 * concat
 * El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
 */

/**
 * join
 * El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
 */
