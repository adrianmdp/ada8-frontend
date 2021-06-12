//Definí una función generarMatrizEscalonada que reciba como argumento un número entero filas y devuelva un array 2d con la cantidad de filas filas, donde la primera fila tiene 1 columna, la segunda tiene 2, la tercera 3, y así sucesivamente. Los ítems de la matriz deben ser 0.

const generarMatrizEscalonada = (num) => {
	let respuesta = [];

	for (let i = 1; i <= num; i++) {
		// console.log("i: ", i);

		// este for se va a recorrer para los siguientes valores de i
		// 1 en la primera vuelta
		// 2 en la segunda
		// 3 en la tercera

		let aux = [];
		for (let j = 0; j < i; j++) {
			// console.log("j: ", j);

			// este for se va a recorrer "i" veces!!!

			aux.push(0);
		}

		respuesta.push(aux);
	}

	return respuesta;
};

// Respuesta
// [
//      [0],
//      [ 0, 0 ],
//      [ 0, 0, 0 ],
//      [ 0, 0, 0, 0 ]
// ]

// Aux
//[ 0, 0, 0, 0 ]

const matriz = generarMatrizEscalonada(4);

console.log(matriz);
//  [
//    [0],
//    [0, 0],
//    [0, 0, 0]
//  ]
// generarMatrizEscalonada(5);
//  [
//    [0],
//    [0, 0],
//    [0, 0, 0],
//    [0, 0, 0, 0],
//    [0, 0, 0, 0, 0]
//  ]
