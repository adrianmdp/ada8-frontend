// const user = {
//    name: e.target.name.value,
//    email: e.target.email.value,
// }

// const args = {
//    method: 'POST',
//    headers: {
//       "Content-Type": "aplication/json"
//    },
//    body: user
// }

// fetch('https://comics-68dcf-default-rtdb.firebaseio.com/users', args)

const addUser = (e) => {
	e.preventDefault();

	const pet = {
		name: e.target.nombre.value,
		raza: e.target.raza.value,
	};

	const args = {
		method: "POST",
		headers: {
			"Content-Type": "aplication/json",
		},
		body: JSON.stringify(pet),
	};

	fetch("https://comics-68dcf-default-rtdb.firebaseio.com/pets.json", args);
};

const updateUser = () => {
	const user = {
		name: "Lionel",
	};

	const args = {
		method: "PUT",
		headers: {
			"Content-Type": "aplication/json",
		},
		body: JSON.stringify(user),
	};

	fetch(
		"https://comics-68dcf-default-rtdb.firebaseio.com/users/-MilWZV3vFxdxaiKI1k9.json",
		args
	);
};

const removeUser = () => {
	const args = {
		method: "DELETE",
	};

	fetch(
		"https://comics-68dcf-default-rtdb.firebaseio.com/users/-MilWZV3vFxdxaiKI1k9.json",
		args
	);
};

const getUsers = () => {
	fetch("https://comics-68dcf-default-rtdb.firebaseio.com/users.json")
		.then((response) => response.json())
		.then((rta) => {
			console.log(rta);
		});
};

const form = document.getElementById("myform");

form.addEventListener("submit", addUser);

//-MilWZV3vFxdxaiKI1k9
