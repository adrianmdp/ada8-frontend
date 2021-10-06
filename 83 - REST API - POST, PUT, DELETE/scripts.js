const args = {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: { data: "" },
};

fetch(url, args)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	});
