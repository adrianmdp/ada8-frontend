// aprobado es mayor a 5
// promocionado si es mayor o igual a 8

// const estaAprobado = (value) => {
//   if (value > 5) {
//     return "Examen aprobado";
//   } else {
//     return "Examen desaprobado";
//   }
// }

// function estaAprobado(value) {
//     if (value > 5) {
//       return true;
//     } else {
//       return false;
//     }
// }

function estaAprobado(value) {
  if (value < 2) {
    console.log("El examen fue un desastre");
  } else if (value >= 8) {
    console.log("Examen promocionado");
  } else if (value > 5) {
    console.log("Examen aprobado");
  } else {
    console.log("Examen desaprobado");
  }
}

const examen1 = 4;
const examen2 = 7;
const examen3 = 2;
const examen4 = 9;

const rta1 = estaAprobado(examen1);
const rta2 = estaAprobado(examen2);
const rta3 = estaAprobado(examen3);
const rta4 = estaAprobado(examen4);

if (rta2) {
  console.log("Imprimir diploma");
} else {
  console.log("Debe recursar la materia");
}

console.log(15 > 8); // true
console.log(15 <= 8); // false
console.log(15 < 15); // false
console.log(15 <= 15); // true
console.log(15 == 32); // false
console.log(15 === 32); // false
console.log(15 == "15"); // true
console.log(15 === "15"); // false
console.log(15 === "15" && 15 > 8); // false
console.log(15 === "15" || 15 > 8);

// While
const edad = 38;
let contador = 1;

while(edad >= contador) {
    console.log(contador);
    // contador = contador + 1;
    contador++;
}

const resultado = 20;
const pregunta = "¿Cuanto es 12 + 8?";
let rta;

while(rta != resultado) {
  rta = prompt(pregunta);
}

const nombre = prompt("Ingrese su nombre");

// For
for(let i = 0; i < nombre.length; i++) {

  console.log(nombre[i]);

}

const alumnos = ["Agostina", "Valentina", "Mailen", "Ludmila"];
const alumnos2 = ["Federico", "Juan", "Santiago"];



const enviarInvitacionesActoFinal = (listaAlumnos) => {

  for(let i = 0; i < listaAlumnos.length; i++) {
    console.log(`Enviar email a ${listaAlumnos[i]}`);
  }

}


enviarInvitacionesActoFinal(alumnos);
enviarInvitacionesActoFinal(alumnos2);



//  i++   <=>   i = i + 1


const nombre = "Sabirna";





const esMayor = false;

if(!esMayor) {
  console.log('Es mayor de edad');
}

const hoy = 'sabado';

if( "Adrian" === nombre && esMayor === false || hoy === 'sabado' ) {

}

"Adrian" === nombre && <div>soy un html</div>

// Devuelven false
false 
null
undefined
0
''
NaN

if("Adrián") { // Esto devuelve true
}

if(null) { // Esto devuelve false
}

// Operador NOT - Niega el resultado de la condición o el valor de un dato.
if( !("Adrian" === nombre) ) {
  console.log('Esto solo se muestra sin la condición da true');
} else if(typeof nombre === 'boolean') {
  console.log('Esto solo se va a mostrar si nombre fuera un booleano')
} else {
  console.log('Esto solo se muestra sin la condición da false');
}

