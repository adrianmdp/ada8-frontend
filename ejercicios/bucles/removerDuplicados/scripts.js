// Crear una función removerDuplicados que tome como argumento un array array y que devuelva un array con los mismos valores de array pero sin valores duplicados.

const removerDuplicados = (array) => {
	const arrayAux = [];

	for (data of array) {
		if (!arrayAux.includes(data)) {
			arrayAux.push(data);
		}
	}

	return arrayAux;
};

const removerDuplicados = (array) => {
	let valorSinDuplicado = [];

	for (let i = 0; i < array.length; i++) {

        let flag = false;
        
        for(let j = 0; j < valorSinDuplicado.length; j++) {

            if(array[i] === valorSinDuplicado[j]) {

                flag = true;

            }

		}

        if(!flag) {
            valorSinDuplicado.push(array[i]);
        }
	}

	return valorSinDuplicado; // [5, 23, 8, ]
};

console.log(removerDuplicados([1, 1, 1])); // [1]
console.log(removerDuplicados([1, 1, 2, 2, 3, 3])); // [1, 2 ,3]
console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23])); // [5, 23 ,8, 44]
