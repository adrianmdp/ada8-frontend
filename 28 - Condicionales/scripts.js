// aprobado es mayor a 5
// promocionado si es mayor o igual a 8

// function estaAprobado(value) {
//   if (value > 5) {
//     console.log("Examen aprobado");
//   } else {
//     console.log("Examen desaprobado");
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
    if(value < 2) {
        console.log("El examen fue un desastre");
    } else if (value >= 8) {
        console.log("Examen promocionado");
    } else if(value > 5) {
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


if(rta2) {
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
console.log(15 == "15") // true
console.log(15 === "15") // false
console.log(15 === "15" && 15 > 8) // false
console.log(15 === "15" || 15 > 8) // true
