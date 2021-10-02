let ledZeppelin = {
	nombre: "Led Zeppelin",
	anio: 1968,
	activa: false,
	miniatura:
		"http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
	integrantes: [
		"Jimmy Page",
		"Robert Plant",
		"John Paul Jones",
		"John Bonham",
	],
	discos: [
		{
			nombre: "Led Zeppelin",
			anio: 1969,
			canciones: ["Good Times, Bad Times", "Communication Breakdown"],
			duracion: 2691,
		},
		{
			nombre: "Led Zeppelin II",
			anio: 1969,
			canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
			duracion: 2502,
		},
		{
			nombre: "Led Zeppelin III",
			anio: 1970,
			canciones: ["Immigrant Song"],
			duracion: 2489,
		},
		{
			nombre: "Led Zeppelin IV",
			anio: 1971,
			canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
			duracion: 2559,
		},
	],
};

const informacionDeLaBanda = (band) => {
	const { nombre, anio, discos, integrantes } = band;

	let counterCanciones = 0;
	let counterDuracion = 0;
	for (const { canciones, duracion } of discos) {
		counterCanciones += canciones.length;
		counterDuracion += duracion;
	}

	const promedioCanciones = counterDuracion / counterCanciones;

	return `${nombre} se fundó en el año ${anio}. Tiene ${integrantes.length} integrantes: ${integrantes.join(", ")}. Tiene en total ${discos.length} discos. Tiene en total ${counterCanciones} canciones entre todos los discos. En promedio, cada canción dura ${promedioCanciones} segundos.`;
};

const rta = informacionDeLaBanda(ledZeppelin);

console.log(rta);
