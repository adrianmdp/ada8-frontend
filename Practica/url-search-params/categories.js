cat = {
	id: 2,
	name: "cine",
};

const link = document.getElementById("link");

link.setAttribute("href", `./edit-category.html?catId=${cat.id}`);
