// Crear una función hayBloqueHorizontal que tome como argumento un array 2d matriz y devuelva true si dicha matriz tiene un bloque horizontal de 3 o más ítems consecutivos idénticos, o false si no tiene.


const tieneBloqueHorizontal = (matriz) => {

    for(let i = 0; i < matriz.length; i++) {

        const array = matriz[i]; // [1, 2, 3]

        for(let j = 0; j < array.length; j++) {

            if(array[j] === array[j + 1] && array[j] === array[j + 2]) {

                for(let x = j; x < array.length - j; x++) {
                    if(array[x] === array[x + 1]) {

                    }
                }
                return true;

            // if ((array[j] === array[j + 1] && array[j] === array[j + 2] && array[j] === array[j + 3] && array[j] === array[j + 4]) ||
            //     (array[j] === array[j + 1] && array[j] === array[j + 2] && array[j] === array[j + 3]) || 
            //     (array[j] === array[j + 1] && array[j] === array[j + 2])) {
            }

        }

    }

    

}



// [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
// ]


console.log(tieneBloqueHorizontal([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
])) // false

console.log(tieneBloqueHorizontal([
  [1, 2, 3, 4],
  [1, 2, 2, 2],
  [1, 2, 4, 5],
])) // true

console.log(tieneBloqueHorizontal([
    [1, 2, 3, 4],
    [1, 2, 4, 2],
    [1, 2, 4, 5],
    [1, 2, 4, 5, 5, 5],
    [1, 2, 4, 5],
  ])) // true

  console.log(tieneBloqueHorizontal([
    [1, 2, 3, 4],
    [1, 2, 4, 2],
    [1, 2, 4, 5],
    [1, 2, 4, 5, 2, 5],
    [1, 2, 4, 5],
  ])) // false