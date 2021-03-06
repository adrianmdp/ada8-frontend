type Mascota = {
	nombre: string;
	edad: number;
	raza?: string; // el ? define que el dato es opcional
	ciudad?: string; // el ? define que el dato es opcional
	pais?: string;
	activo: boolean;
};

const mascota: Mascota = {
	nombre: "Zeta",
	edad: 4,
	raza: "generico",
	activo: false,
};

const mascota2: Mascota = {
	nombre: "Fender",
	edad: 6,
	ciudad: "Mar del Plata",
	activo: true,
};

const mascota3: Mascota = {
	nombre: "Pepe",
	edad: 2,
	activo: true,
};

// editar una prop del objeto
mascota.nombre = "Gibson";

// agregar una prop al objeto
mascota.ciudad = "Mar del Plata";

mascota.pais = "Argentina";

// eliminar una prop del objeto
delete mascota.raza;

// console.log(mascota);

const saldo = 123;

mascota2.pais = "Uruguay";

// console.log(mascota.edad + 234);

// const miFuncion = (m: Mascota) => {
// 	console.log(m.nombre);
// };

// miFuncion(mascota2);

// console.log(mascota2["nombre"]);
// console.log(mascota2.nombre);

const miFuncion2 = (obj: Mascota, prop: string) => {
	console.log(obj[prop]);
};

// miFuncion2(mascota, "edad");
// miFuncion2(mascota2, "pais");
// miFuncion2(mascota3, "nombre");
// miFuncion2(mascota3, "activo");

// const persona = {
// 	hijo1: "Pedro",
// 	hijo2: "Juan",
// 	hijo3: "Matías",
// };

// for (let i = 1; i <= 3; i++) {
// 	console.log(persona["hijo" + i]);
// 	console.log(persona[`hijo${i}`]);
// }

const mostrarDatoMascota = (m: Mascota) => {
	for (const prop in m) {
		console.log(prop, m[prop]);
	}
};

mostrarDatoMascota(mascota2);
