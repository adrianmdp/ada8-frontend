const personas = [
	{
		nombre: "Matias",
		edad: 26,
	},
	{
		nombre: "Adri",
		edad: 38,
	},
	{
		nombre: "Pepito",
		edad: 22,
	},
];

// const aux = [];
// for(const persona of personas) {
//   persona.profesion = "programador";
//   aux.push(persona);
// }

// console.log(aux);

// Recorre todos los elementos y por cada return guarda el elemento modificado
const personasConProfesion = personas.map((p) => {
	if (p.edad > 30) {
		return p;
	}
});

console.log({ personasConProfesion, personas });

// Map Se utiliza cuando necesito modificar cada elemento.
const numeros = [8, 9, 3, 4, 5, 6, 56];

const calcularImp = (numero) => {
	return numero * 1.21;
};

const multi = numeros.map((numero) => {
	return numero * 3;
});
//for in
numeros.forEach((numero) => {
	console.log(numero);
});

const impuestos = numeros.map(calcularImp);

console.log(multi);
console.log(impuestos);
console.log(numeros);

//Find se utiliza para buscar un elemento en el array
//findIndex idem pero con el indice
const primerNumeroMayorACinco = numeros.find((numero) => {
	return numero > 5;
});
const indiceNumeroMayorACinco = numeros.findIndex((numero) => {
	return numero > 5;
});

console.log(primerNumeroMayorACinco);
console.log(indiceNumeroMayorACinco);

//filter se utiliza para eliminar los elementos del array
const numerosMayorA4 = numeros.filter((numero) => {
	return numero >= 4;
});

console.log(numerosMayorA4);

const trabajo = personas.filter((p) => {
	return p.edad >= 30 && p.edad <= 70;
});

console.log(trabajo);

// const numeros = [8,9,3,4,5,6,56];
//2%2 !0 -> 1
//3%2 !1 -> 0
//4%2 !0 -> 1
const hayPorLoMenosPar = numeros.some((numero) => {
	// console.log({numero,res:numero%5});
	return numero % 2 == 0;
	//return !numero%2;
});
const sonTodosPar = numeros.every((numero) => {
	console.log({ numero });
	return numero % 2 == 0;
	//return !numero%2;
});

console.log(hayPorLoMenosPar);
console.log(sonTodosPar);

const numeros2 = [8, 9, 3, 4, 5, 6, 56];
// acc num
// 8 9
// (8+9) 3
// 20 4
numeroSumados = numeros2.reduce((acc, numero) => {
	return acc + numero;
});

numeroMayor = numeros2.reduce((acc, numero) => {
	if (acc > numero) {
		return acc;
	} else {
		return numero;
	}
	//  return acc > numero?acc:numero;
});

console.log(numeroSumados);
console.log(numeroMayor);
const personasVacunadas = [
	{
		nombre: "Matias",
		edad: 26,
		vacunado: 1,
	},
	{
		nombre: "Adri",
		edad: 38,
		vacunado: 0,
	},
	{
		nombre: "Pepito",
		edad: 22,
		vacunado: 2,
	},
];
const nombrePersona = personasVacunadas.reduce((acc, persona) => {
	return `${acc}${persona.nombre},`;
}, "Persona en la lista ");

const edadSuma = personasVacunadas.reduce((acc, persona) => {
	return acc + persona.edad;
}, 0);

console.log(nombrePersona);
console.log(edadSuma / 3);

const test = (numero, mult) => numero * mult;

const test1 = (numero, mult) => {
	return numero * mult;
};
