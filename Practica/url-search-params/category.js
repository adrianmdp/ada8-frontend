const params = new URLSearchParams(window.location.search);
console.log(params.get("catId"));

const storage = JSON.parse(
	'{"operaciones":[{"id":"853ff710-9d2b-40a0-9b88-f11a1762721d","descripcion":"Op 1","monto":500,"categoria":"687f3856-c598-4ebc-972c-9545c84d9f9c","tipo":"GASTO","fecha":"2021/07/31"},{"id":"c0a186c9-9ea5-4f9f-a3d1-8e7ee479f770","descripcion":"Lorem","monto":300,"categoria":"8a83d27e-b2ba-4d5f-8705-1216893247ea","tipo":"GASTO","fecha":"2021/08/07"},{"id":"b9a4d3f2-a56f-4a0a-b448-4aca81130e22","descripcion":"Lorem 2","monto":500,"categoria":"8a83d27e-b2ba-4d5f-8705-1216893247ea","tipo":"GANANCIA","fecha":"2021/08/07"},{"id":"93907dff-9c18-43bf-a60e-e59974099ff7","descripcion":"Op1 ","monto":345,"categoria":"f1fa45ca-1c2b-4bfc-a7f9-93d5cf40fb8e","tipo":"GASTO","fecha":"2021/08/14"},{"id":"5e03daff-2a98-4350-aab5-e28e896609f0","descripcion":"op2","monto":123,"categoria":"687f3856-c598-4ebc-972c-9545c84d9f9c","tipo":"GANANCIA","fecha":"2021/08/28"},{"id":"33109d96-ed3f-4348-897d-eed05b357ec2","descripcion":"op3","monto":567,"categoria":"4135bf11-d462-4800-b0b7-2210447c9bce","tipo":"GANANCIA","fecha":"2021/09/17"},{"id":"8d33650e-10d1-4b06-a573-1c81bfae26bb","descripcion":"op4","monto":123,"categoria":"cbe1497e-410f-4975-a330-22f389495dba","tipo":"GASTO","fecha":"2021/09/22"},{"id":"ebecd96e-c9ec-478c-8e83-f0fea5431995","descripcion":"Op pasada","monto":1000,"categoria":"aafc0a58-754e-4bf7-8bc4-756d3d5ad4e7","tipo":"GANANCIA","fecha":"2020/01/25"}],"categorias":[{"id":"8a83d27e-b2ba-4d5f-8705-1216893247ea","nombre":"Comida"},{"id":"ff7e1ba6-14e9-4b50-be90-1ad704958bac","nombre":"Servicios"},{"id":"cbe1497e-410f-4975-a330-22f389495dba","nombre":"Salidas"},{"id":"687f3856-c598-4ebc-972c-9545c84d9f9c","nombre":"Educación"},{"id":"4135bf11-d462-4800-b0b7-2210447c9bce","nombre":"Transporte"},{"id":"aafc0a58-754e-4bf7-8bc4-756d3d5ad4e7","nombre":"Trabajo"},{"id":"17b31e20-4b7d-4946-b632-65d28e17f290","nombre":"Categoría 1"},{"id":"9ab753b3-98d8-4f34-ba60-8fbf1d81102c","nombre":""},{"id":"dfe4bb1d-abc1-4131-8731-241e8b7e09f1","nombre":""},{"id":"77127390-b254-4679-a807-66af3bb5ec09","nombre":""},{"id":"0beda6d0-2a31-4d7f-8809-2c537e96a3a8","nombre":"Comida"},{"id":"191a543c-b445-4f9b-b35f-48b333d2ac78","nombre":"Comida"},{"id":"b265c26f-a4a9-4262-941a-ff01b1bc1a1e","nombre":"Comida"},{"id":"09b3bf37-b6e7-4fbe-957e-45afa8332320","nombre":"Comida"},{"id":"f1fa45ca-1c2b-4bfc-a7f9-93d5cf40fb8e","nombre":"Comida"},{"id":"cc23f2f1-fc52-4c34-afbc-5c3b853e0a9c","nombre":"Comida"},{"id":"3317a6b7-5367-4434-bcb2-48a0017ae38f","nombre":""},{"id":"7607b7a4-6c99-443e-9e06-59513fb27b57","nombre":""},{"id":"45e46e5d-80fa-4f0c-a5dc-5c4d1d0d0833","nombre":""},{"id":"de8e102f-fdc8-4789-9cdd-1e775e27b090","nombre":""}],"cuentas":[]}'
);

const operaciones = storage.operaciones;

// console.log(operaciones);

let totales = {
	2021: {
		7: {
			GANANCIA: 0,
			GASTO: 0,
		},
	},
	2020: {
		7: [],
	},
};

operaciones.forEach((op) => {
	const date = new Date(op.fecha);

	if (!totales[date.getFullYear()]) {
		totales[date.getFullYear()] = {};
	}
	if (!totales[date.getFullYear()][date.getMonth()]) {
		totales[date.getFullYear()][date.getMonth()] = {};
	}
	if (!totales[date.getFullYear()][date.getMonth()][op.tipo]) {
		totales[date.getFullYear()][date.getMonth()][op.tipo] = 0;
	}

	totales[date.getFullYear()][date.getMonth()][op.tipo] += op.monto;
});

console.log(totales);
