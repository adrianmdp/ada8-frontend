/* Types */
type Personaje = {
	id: number;
	name: string;
	thumbnail: string;
	age: number;
	weight: number;
	height: number;
	hair_color: string;
	professions: string[];
	friends: string[];
};
type Child = {
	name: string;
	email: string;
	age: number;
	father: {
		name: string;
		age: number;
		attributes: {
			weight: number;
			height: number;
			hair_color: string;
			professions: string[];
			friends: string[];
		};
	};
	address: string;
};

/* Code */

const inhabitants: Personaje[] = getInhabitants(); 

const inhabitantsTable = document.getElementById("inhabitants");
const inhabitantsTbody = inhabitantsTable.querySelector("tbody");

inhabitants.map((element) => {
	const row = document.createElement("tr");

	for (const prop in element) {
		const celda = document.createElement("td");
		const text = document.createTextNode(element[prop]);

		celda.appendChild(text);
		row.appendChild(celda);
	}

	inhabitantsTbody.appendChild(row);
});

// Asignación por desestructuración
const inhabitant: Personaje = getInhabitants()[0]; // le asigno una direccion de memoria k - 10 (ejemplo del excel)
const inhabitant2: Personaje = getInhabitants()[1];

const name: string = inhabitant.name;

const { id, age, hair_color } = inhabitant;

console.log(id, name, age, hair_color);

// Cambiando el nombre de datos desestructurados
const { name: newName } = inhabitant2;

console.log(newName);

// Desestructuración anidada

const child: Child = {
	name: "Pedro",
	email: "asd@asd.com",
	age: 15,
	father: {
		name: "Juan",
		age: 40,
		attributes: {
			weight: 39.065952,
			height: 107.75835,
			hair_color: "Pink",
			professions: [
				"Metalworker",
				"Woodcarver",
				"Stonecarver",
				" Tinker",
				"Tailor",
				"Potter",
			],
			friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
		},
	},
	address: "Asd 3456",
};

const {
	father: {
		attributes: { professions },
		age: fatherAge,
	},
} = child;

const { father } = child;

const { name: fatherName } = father;
// console.log(professions);

// child.father.attributes.professions.map(profession => {

// });

// professions.map(profession => {

//});

console.log(fatherName);

// Objetos como parámetros
const getNameMessage = (value: Personaje) => {
	return `El nombre del personaje es: ${value.name}`;
};

const response = getNameMessage(inhabitant);

console.log(response);

// Desestructurando parámetros
const getAgeMessage = ({ age }: Personaje) => {
	return `El personaje tiene: ${age} años.`;
};

const response2 = getAgeMessage(inhabitant);

console.log(response2);

// Operador spread
const getInhabitantInfo = ({ professions, friends, ...restoDelObjeto }: Personaje) => {
	console.log("-----------------------------");

	for(const prop in restoDelObjeto) {
		console.log(`${prop}: ${restoDelObjeto[prop]}`);
	}

	console.log("-----------------------------");

	professions.map((profession, index) => {
		console.log(`Profesión ${index + 1}: ${profession}`);
	});

	console.log("-----------------------------");

	friends.map((friend, index) => {
		console.log(`Amigo ${index + 1}: ${friend}`);
	});
};


// inhabitants.map((inhabitant: Personaje)=> {
	// getInhabitantInfo(inhabitant);
// });

// Operador rest
const suma = (num1, num2, num3, ...rest) => {

	console.log(rest);

	let result = 0;

	for(const num of rest) {
		result += num;
	}

	return result;

}

const resp = suma(2, 4, 5, 34, 56, 67, 34, 56, 67, 34, 56, 67, 34, 56, 67);

console.log(resp);

type Nomina = {
	nombre: string,
	salario: number,
	puesto: string,
	premios?: number
}

// Inmutabilidad
const nominaEmpleado: Nomina = {
	nombre: "Adrián",
	salario: 10000,
	puesto: "developer"
}



const nominaEmpleado2: Nomina = {
	nombre: "Mati",
	salario: 12000,
	puesto: "developer"
}

Object.freeze(nominaEmpleado);

// Por error hubo un cambio en el salario de los empleados.
nominaEmpleado.salario = 30000;
nominaEmpleado.premios = 1.12;

const cobrarSalario = ({salario}) => {

	return salario * 1.12;

}

const aCobrar = cobrarSalario(nominaEmpleado);

console.log(aCobrar);

Object.seal(nominaEmpleado2);

nominaEmpleado2.salario = 30000;
nominaEmpleado2.premios = 1.12;

console.log(nominaEmpleado2);


// Pasaje por valor vs pasaje por referencia
// Shallow copy vs deep copy

let var1 = 34;
const var2 = 22;

var1 = var2;

console.log(var1, var2);


// Cuando asignamos por referencia, estamos modificando el dato origen

const inhabitantTest = inhabitant; // a inhabitantTest le asigno la direccion de memoria k - 10 (ejemplo del excel);

// inhabitantTest.age = 9999999999;

// console.log(inhabitantTest, inhabitant);




// Cuando asignamos por destructuración, estamos generando un nuevo dato copia.
const { ...inhabitantTest2 } = inhabitant;

inhabitantTest2.age = 9999999999;

console.log(inhabitantTest2, inhabitant);

// {
//    id: 0,
//    name: "Tobus Quickwhistle",
//    thumbnail:
//      "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
//    age: 306,
//    weight: 39.065952,
//    height: 107.75835,
//    hair_color: "Pink",
//    professions: [
//      "Metalworker",
//      "Woodcarver",
//      "Stonecarver",
//      " Tinker",
//      "Tailor",
//      "Potter",
//    ],
//    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
//  },
