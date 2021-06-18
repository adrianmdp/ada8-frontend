// Crear una función tieneBloqueVertical que tome como argumento un array 2d matriz y devuelva true si dicha matriz tiene un bloque vertical de 3 o más ítems consecutivos idénticos, o false si no tiene.


const tieneBloqueVertical = (matriz) => {

    const itemsPorArray = matriz[0].length; // 4 = a columnas

    let rta = false;

    for(let j = 0; j < itemsPorArray; j++) {

        for(let i = 0; i < matriz.length; i++) {
            
            if( (i < matriz.length - 2) && 
                matriz[i][j] === matriz[i + 1][j] && 
                matriz[i][j] === matriz[i + 2][j]) {

                    const dato = matriz[i][j];

                    for(let w = i; w < matriz.length; w++) {
                        if(matriz[w][j] === dato) {
                            matriz[w][j] = 0;
                        } else {
                            break;
                        }

                    }

                    rta = true;
            }

        }

    }

    console.log(matriz);

    return rta;

}


// console.log(tieneBloqueVertical([ 
//     [4, 2, 3], 
//     [1, 5, 3], 
//     [1, 2, 3], 
//     [3, 2, 5], 
//     [3, 2, 5], 
//     [3, 2, 5], 
//     [3, 2, 5], 
//     [3, 2, 5], 
// ])) // true

// console.log(tieneBloqueVertical([
//   [1, 2, 3, 4],
//   [7, 2, 9, 2],
//   [1, 8, 4, 5],
// ])) // false













console.log(tieneBloqueVertical([
    [1, 2, 3, 4],
    [2, 2, 3, 4],
    [1, 2, 4, 2],
    [2, 2, 4, 5],
    [1, 4, 4, 5],
    [2, 2, 4, 5],
    [1, 4, 4, 5],
    [2, 2, 4, 5],
    [1, 4, 3, 4],
])) // true













//   console.log(tieneBloqueVertical([
//     [1, 2, 3, 4],
//     [1, 7, 4, 5],
//     [4, 2, 3, 5],
//     [4, 1, 4, 5],
//     [4, 2, 4, 4],
//   ])) // false