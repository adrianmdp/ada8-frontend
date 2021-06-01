let table = "<table>";
table += "<thead>";
// th
table += "</thead>";
table += "<tbody>";
// tr y td
table += "</tbody>";
table += "</table>";

document.body.innerHTML = table;

const prueba = () => {
	console.log("funciona");
};

document.body.addEventListener("click", prueba);
