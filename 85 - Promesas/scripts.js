// console.log("Tengo que buscar un usuario en una lista");

// setTimeout(() => {
// 	console.log("Encontré el usuario");
// }, 1000);

// console.log("Mostrar el Teléfono del usuario");

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

const success = true; // se supone que es un mje que envía la impresora

const imprimir = () => {
	return new Promise((resolve, reject) => {
		if (success) {
			console.log("Imprimir");
			resolve({
				code: 200,
				status: "Ok",
				copyright: "© 2021 MARVEL",
				attributionText: "Data provided by Marvel. © 2021 MARVEL",
				attributionHTML:
					'<a href="http://marvel.com">Data provided by Marvel. © 2021 MARVEL</a>',
				etag: "eed7f8c92840e844d9b71e4fbe919f14299c39c5",
			});
		} else {
			reject({
				code: "InvalidCredentials",
				message: "That hash, timestamp and key combination is invalid.",
			});
		}
	});
};

console.log("Iniciar proceso de impresión");

imprimir()
	.then((resolve) => {
		console.log("La impresión finalizó con éxito!!!");
		console.log(resolve);
	})
	.catch((err) => {
		console.log("La impresión no se pudo realizar!");
		console.log(err);
	});

// Acá va el imprimir!!!

// Este mje depende de la resolución de la promesa.
