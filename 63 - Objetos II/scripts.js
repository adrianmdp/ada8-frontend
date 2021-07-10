const user1 = {
	name: "Adrián",
	lastname: "Solimano",
	email: "adrian@gmail.com",
};
const user2 = {
	name: "Adrián",
	lastname: "Solimano",
	email: "adrian@gmail.com",
};

const users = [user1, user2];

const rta = JSON.stringify(users);

console.log(rta);

const response =
	'{"libros":[{"id":4,"name":"Adrián","lastname":"Solimano","email":"adrian@gmail.com","esAdmin":true,"editoriales":[{"nombre":""},{"nombre":""}]},{"name":"Adrián","lastname":"Solimano","email":"adrian@gmail.com"},{"name":"Adrián","lastname":"Solimano","email":"adrian@gmail.com"}],"pagina":1,"total":500,"exito":true}';

const objetResponse = JSON.parse(response);

if (objetResponse.exito) {
	for (libro of objetResponse.libros) {
		console.log(libro);
	}
}

response2 =
	'[{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipitsuscipit recusandae consequuntur expedita et cumreprehenderit molestiae ut ut quas totamnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendisqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iurevoluptatem occaecati omnis eligendi aut advoluptatem doloribus vel accusantium quis pariaturmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipiscisit amet autem assumenda provident rerum culpaquis hic commodi nesciunt rem tenetur doloremque ipsam iurequis sunt voluptatem rerum illo velit"}]';

objetResponse2 = JSON.parse(response2);

console.log(objetResponse2);
